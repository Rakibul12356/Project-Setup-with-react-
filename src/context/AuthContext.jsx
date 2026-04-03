import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

// Dummy users database
const DUMMY_USERS = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "user@demo.com",
    password: "user123",
    role: "user",
    avatar: "AJ",
    joinedDate: "Jan 2024",
  },
  {
    id: 2,
    name: "Sarah Admin",
    email: "admin@demo.com",
    password: "admin123",
    role: "admin",
    avatar: "SA",
    joinedDate: "Dec 2023",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("auth_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 900));

    const found = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      localStorage.setItem("auth_user", JSON.stringify(safeUser));
      toast.success(`Welcome back, ${safeUser.name}!`);
      setLoading(false);
      return { success: true, user: safeUser };
    } else {
      setLoading(false);
      toast.error("Invalid email or password");
      return { success: false };
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    const exists = DUMMY_USERS.find((u) => u.email === email);
    if (exists) {
      setLoading(false);
      toast.error("Email already registered");
      return { success: false };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      role: "user",
      avatar: name.slice(0, 2).toUpperCase(),
      joinedDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };

    setUser(newUser);
    localStorage.setItem("auth_user", JSON.stringify(newUser));
    toast.success("Account created! Welcome aboard 🎉");
    setLoading(false);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    toast.info("Logged out successfully");
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem("auth_user", JSON.stringify(updated));
    toast.success("Profile updated!");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
