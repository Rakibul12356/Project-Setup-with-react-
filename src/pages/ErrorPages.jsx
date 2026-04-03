import { Link } from "react-router-dom";
import { Home, ShieldX } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="text-center">
        <p className="text-8xl font-black mb-4" style={{ color: "var(--accent)" }}>404</p>
        <h1 className="text-2xl font-bold text-primary mb-2">Page not found</h1>
        <p className="text-secondary mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-red-100">
          <ShieldX size={28} className="text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Access Denied</h1>
        <p className="text-secondary mb-8">You don't have permission to access this page.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
