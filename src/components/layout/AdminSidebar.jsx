import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard, Users, ShoppingBag, BarChart3,
  Settings, Shield, Bell, LogOut, Zap, X, FileText, Tag,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/admin" },
  { icon: Users, label: "Users", to: "/admin/users" },
  { icon: ShoppingBag, label: "Products", to: "/admin/products" },
  { icon: Tag, label: "Orders", to: "/admin/orders" },
  { icon: BarChart3, label: "Analytics", to: "/admin/analytics" },
  { icon: FileText, label: "Reports", to: "/admin/reports" },
  { icon: Bell, label: "Notifications", to: "/admin/notifications" },
  { icon: Settings, label: "Settings", to: "/admin/settings" },
];

export default function AdminSidebar({ open, onClose }) {
  const { user, logout } = useAuth();

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full z-40 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#050a14" }}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b" style={{ borderColor: "#1e293b" }}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md flex items-center justify-center bg-orange-500">
              <Shield size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Admin<span className="text-orange-500">Panel</span>
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Admin badge */}
        <div className="px-4 py-4 border-b" style={{ borderColor: "#1e293b" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 bg-orange-500">
              {user?.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{user?.name}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-400">
                <Shield size={10} /> Administrator
              </span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">Admin Menu</p>
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(({ icon: Icon, label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/admin"}
                onClick={onClose}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? "" : ""}`
                }
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#f97316", color: "#fff" }
                    : {}
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
          <Link to="/dashboard" className="sidebar-item mb-1">
            <LayoutDashboard size={17} />
            <span>User Dashboard</span>
          </Link>
          <button
            onClick={logout}
            className="sidebar-item w-full text-red-400 hover:text-red-300 hover:bg-red-900/20"
          >
            <LogOut size={17} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
