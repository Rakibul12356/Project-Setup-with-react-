import { Menu, Bell, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function DashboardHeader({ onMenuClick, title }) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header
      className="h-16 flex items-center gap-4 px-4 sm:px-6 border-b border-theme sticky top-0 z-20"
      style={{ backgroundColor: "var(--bg-card)" }}
    >
      {/* Menu toggle (mobile) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-theme"
      >
        <Menu size={18} />
      </button>

      {/* Title */}
      <h1 className="font-semibold text-primary text-base hidden sm:block">{title || "Dashboard"}</h1>

      {/* Search */}
      <div className="flex-1 max-w-xs hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-theme bg-secondary">
        <Search size={15} className="text-muted flex-shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-primary placeholder:text-muted outline-none w-full"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-theme">
          <Bell size={17} />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </button>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-theme"
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer"
          style={{ backgroundColor: "var(--accent)" }}
          title={user?.name}
        >
          {user?.avatar}
        </div>
      </div>
    </header>
  );
}
