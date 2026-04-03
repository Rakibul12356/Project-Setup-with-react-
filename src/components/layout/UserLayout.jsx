import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import DashboardHeader from "./DashboardHeader";

const TITLES = {
  "/dashboard": "Overview",
  "/dashboard/orders": "My Orders",
  "/dashboard/wishlist": "Wishlist",
  "/dashboard/notifications": "Notifications",
  "/dashboard/profile": "Profile",
  "/dashboard/settings": "Settings",
  "/dashboard/help": "Help & Support",
};

export default function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const title = TITLES[pathname] || "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden bg-secondary">
      <UserSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
