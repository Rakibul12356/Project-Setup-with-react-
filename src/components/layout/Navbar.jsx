import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, LogIn, LayoutDashboard, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
          boxShadow: scrolled ? "var(--shadow)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-primary tracking-tight">
                Bolt<span style={{ color: "var(--accent)" }}>UI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "text-accent bg-accent-light"
                        : "text-secondary hover:text-primary hover:bg-secondary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary transition-all duration-150 hover:bg-secondary border border-theme"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Auth Buttons */}
              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to={user.role === "admin" ? "/admin" : "/dashboard"}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-secondary hover:text-primary rounded-lg hover:bg-secondary transition-all"
                  >
                    <LayoutDashboard size={15} />
                    Dashboard
                  </Link>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer"
                    style={{ backgroundColor: "var(--accent)" }}
                    onClick={handleLogout}
                    title="Click to logout"
                  >
                    {user.avatar}
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-secondary hover:text-primary rounded-lg hover:bg-secondary transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all"
                    style={{ backgroundColor: "var(--accent)" }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "var(--accent-hover)")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "var(--accent)")}
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary border border-theme"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            backgroundColor: "var(--bg-primary)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-accent bg-accent-light"
                      : "text-secondary hover:text-primary hover:bg-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="border-t border-theme mt-2 pt-3 flex flex-col gap-2">
              {user ? (
                <>
                  <Link
                    to={user.role === "admin" ? "/admin" : "/dashboard"}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-secondary hover:text-primary hover:bg-secondary flex items-center gap-2"
                  >
                    <LayoutDashboard size={15} /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-secondary hover:bg-secondary"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-white text-center rounded-lg"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
