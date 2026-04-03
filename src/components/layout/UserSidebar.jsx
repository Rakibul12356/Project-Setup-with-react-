import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard, User, Settings, ShoppingBag,
  Heart, Bell, HelpCircle, LogOut, Zap, X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", to: "/dashboard" },
  { icon: ShoppingBag, label: "My Orders", to: "/dashboard/orders" },
  { icon: Heart, label: "Wishlist", to: "/dashboard/wishlist" },
  { icon: Bell, label: "Notifications", to: "/dashboard/notifications" },
  { icon: User, label: "Profile", to: "/dashboard/profile" },
  { icon: Settings, label: "Settings", to: "/dashboard/settings" },
];

const BOTTOM_ITEMS = [
  { icon: HelpCircle, label: "Help & Support", to: "/dashboard/help" },
];

export default function UserSidebar({ open, onClose }) {
  const { user, logout } = useAuth();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "var(--bg-sidebar)" }}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b" style={{ borderColor: "#1e293b" }}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Bolt<span style={{ color: "var(--accent)" }}>UI</span>
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* User Card */}
        <div className="px-4 py-4 border-b" style={{ borderColor: "#1e293b" }}>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {user?.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{user?.name}</p>
              <p className="text-slate-400 text-xs truncate">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">Main Menu</p>
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(({ icon: Icon, label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/dashboard"}
                onClick={onClose}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={17} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t" style={{ borderColor: "#1e293b" }}>
          {BOTTOM_ITEMS.map(({ icon: Icon, label, to }) => (
            <NavLink key={to} to={to} onClick={onClose} className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}>
              <Icon size={17} />
              <span>{label}</span>
            </NavLink>
          ))}
          <button
            onClick={logout}
            className="sidebar-item w-full mt-1 text-red-400 hover:text-red-300 hover:bg-red-900/20"
          >
            <LogOut size={17} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
