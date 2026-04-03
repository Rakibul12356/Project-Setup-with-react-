import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, Zap, LogIn } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || null;

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(form.email, form.password);
    if (result.success) {
      const dest = from || (result.user.role === "admin" ? "/admin" : "/dashboard");
      navigate(dest, { replace: true });
    }
  };

  const fillDemo = (type) => {
    if (type === "user") setForm({ email: "user@demo.com", password: "user123" });
    else setForm({ email: "admin@demo.com", password: "admin123" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-secondary">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
            <Zap size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl text-primary">
            Bolt<span style={{ color: "var(--accent)" }}>UI</span>
          </span>
        </div>

        <div className="p-8 rounded-2xl border border-theme shadow-theme-lg" style={{ backgroundColor: "var(--bg-card)" }}>
          <h1 className="text-2xl font-bold text-primary mb-1">Welcome back</h1>
          <p className="text-secondary text-sm mb-6">Sign in to your account to continue</p>

          {/* Demo Buttons */}
          <div className="flex gap-2 mb-6">
            <button
              type="button"
              onClick={() => fillDemo("user")}
              className="flex-1 py-2 rounded-lg text-xs font-medium border border-theme text-secondary hover:text-primary hover:bg-secondary transition-all"
            >
              Fill User Demo
            </button>
            <button
              type="button"
              onClick={() => fillDemo("admin")}
              className="flex-1 py-2 rounded-lg text-xs font-medium border border-theme text-secondary hover:text-primary hover:bg-secondary transition-all"
            >
              Fill Admin Demo
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted text-sm outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2.5 pr-10 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted text-sm outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="flex justify-end mt-1.5">
                <button type="button" className="text-xs text-accent hover:underline">
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn size={16} /> Sign In
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-secondary mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent font-medium hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
