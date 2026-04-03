import { ShoppingBag, Heart, Bell, TrendingUp, ArrowUpRight, Package, Clock } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const STATS = [
  { icon: ShoppingBag, label: "Total Orders", value: "12", change: "+2 this month", color: "#6366f1" },
  { icon: Heart, label: "Wishlist Items", value: "8", change: "+1 this week", color: "#ec4899" },
  { icon: TrendingUp, label: "Total Spent", value: "$486", change: "+$120 this month", color: "#10b981" },
  { icon: Bell, label: "Notifications", value: "3", change: "2 unread", color: "#f59e0b" },
];

const RECENT_ORDERS = [
  { id: "#ORD-001", product: "UI Component Kit", date: "Mar 28, 2024", status: "Delivered", amount: "$49" },
  { id: "#ORD-002", product: "API Starter Kit", date: "Mar 15, 2024", status: "Processing", amount: "$79" },
  { id: "#ORD-003", product: "Admin Dashboard Pro", date: "Feb 20, 2024", status: "Delivered", amount: "$99" },
];

const STATUS_STYLES = {
  Delivered: { color: "#10b981", bg: "#d1fae5" },
  Processing: { color: "#f59e0b", bg: "#fef3c7" },
  Cancelled: { color: "#ef4444", bg: "#fee2e2" },
};

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary">
            Good morning, {user?.name?.split(" ")[0]} 👋
          </h2>
          <p className="text-secondary text-sm mt-0.5">Here's what's happening with your account.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}>
          <Clock size={12} /> Member since {user?.joinedDate}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STATS.map(({ icon: Icon, label, value, change, color }) => (
          <div key={label} className="p-5 rounded-2xl border border-theme" style={{ backgroundColor: "var(--bg-card)" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                <Icon size={17} style={{ color }} />
              </div>
              <ArrowUpRight size={14} className="text-muted" />
            </div>
            <p className="text-2xl font-bold text-primary">{value}</p>
            <p className="text-secondary text-xs mt-0.5">{label}</p>
            <p className="text-xs mt-1" style={{ color }}>{change}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="rounded-2xl border border-theme overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-theme">
          <h3 className="font-semibold text-primary flex items-center gap-2">
            <Package size={16} style={{ color: "var(--accent)" }} /> Recent Orders
          </h3>
          <button className="text-xs text-accent hover:underline font-medium">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
                {["Order ID", "Product", "Date", "Status", "Amount"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_ORDERS.map((order, i) => (
                <tr
                  key={order.id}
                  className="border-b border-theme last:border-0 hover:bg-secondary transition-colors"
                >
                  <td className="px-5 py-3.5 text-sm font-mono font-medium text-accent">{order.id}</td>
                  <td className="px-5 py-3.5 text-sm text-primary">{order.product}</td>
                  <td className="px-5 py-3.5 text-sm text-secondary">{order.date}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{
                        color: STATUS_STYLES[order.status]?.color,
                        backgroundColor: STATUS_STYLES[order.status]?.bg,
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-primary">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
