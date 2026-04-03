import { Users, ShoppingBag, DollarSign, TrendingUp, ArrowUpRight, Activity } from "lucide-react";

const STATS = [
  { icon: DollarSign, label: "Total Revenue", value: "$48,295", change: "+12.5%", color: "#10b981" },
  { icon: Users, label: "Total Users", value: "2,847", change: "+8.2%", color: "#6366f1" },
  { icon: ShoppingBag, label: "Total Orders", value: "1,234", change: "+5.1%", color: "#f59e0b" },
  { icon: TrendingUp, label: "Conversion Rate", value: "3.24%", change: "+1.2%", color: "#ec4899" },
];

const RECENT_USERS = [
  { name: "Alex Johnson", email: "alex@example.com", role: "User", joined: "Mar 28", status: "Active" },
  { name: "Maria Garcia", email: "maria@example.com", role: "User", joined: "Mar 25", status: "Active" },
  { name: "James Lee", email: "james@example.com", role: "Admin", joined: "Mar 20", status: "Active" },
  { name: "Emma Wilson", email: "emma@example.com", role: "User", joined: "Mar 18", status: "Inactive" },
  { name: "Chris Brown", email: "chris@example.com", role: "User", joined: "Mar 15", status: "Active" },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-primary">Admin Overview</h2>
        <p className="text-secondary text-sm mt-0.5">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map(({ icon: Icon, label, value, change, color }) => (
          <div key={label} className="p-5 rounded-2xl border border-theme" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                <Icon size={17} style={{ color }} />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: "#10b981", backgroundColor: "#d1fae5" }}>
                {change}
              </span>
            </div>
            <p className="text-2xl font-bold text-primary">{value}</p>
            <p className="text-secondary text-xs mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
          <h3 className="font-semibold text-primary flex items-center gap-2">
            <Activity size={16} className="text-orange-500" /> Recent Users
          </h3>
          <button className="text-xs text-orange-500 hover:underline font-medium">Manage all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                {["Name", "Email", "Role", "Joined", "Status"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_USERS.map((u) => (
                <tr key={u.email} className="border-b border-theme last:border-0 hover:bg-secondary transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: u.role === "Admin" ? "#f97316" : "var(--accent)" }}
                      >
                        {u.name[0]}
                      </div>
                      <span className="text-sm font-medium text-primary">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-secondary">{u.email}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={
                        u.role === "Admin"
                          ? { color: "#f97316", backgroundColor: "#ffedd5" }
                          : { color: "var(--accent)", backgroundColor: "var(--accent-light)" }
                      }
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-secondary">{u.joined}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={
                        u.status === "Active"
                          ? { color: "#10b981", backgroundColor: "#d1fae5" }
                          : { color: "#94a3b8", backgroundColor: "var(--bg-secondary)" }
                      }
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
