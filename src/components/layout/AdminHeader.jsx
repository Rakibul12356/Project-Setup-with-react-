import { Menu, Bell, Sun, Moon, Shield } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function AdminHeader({ onMenuClick, title }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header
      className="h-16 flex items-center gap-4 px-4 sm:px-6 border-b border-theme sticky top-0 z-20"
      style={{ backgroundColor: "var(--bg-card)" }}
    >
      <button
        onClick={onMenuClick}
        className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-theme"
      >
        <Menu size={18} />
      </button>

      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-primary text-base hidden sm:block">{title || "Admin Dashboard"}</h1>
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-orange-600 bg-orange-100">
          <Shield size={10} /> Admin
        </span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-theme">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500" />
        </button>
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-theme"
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer bg-orange-500"
          title={user?.name}
        >
          {user?.avatar}
        </div>
      </div>
    </header>
  );
}
