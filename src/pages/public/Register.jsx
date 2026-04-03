import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Zap, UserPlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const result = await register(form.name, form.email, form.password);
    if (result.success) navigate("/dashboard", { replace: true });
  };

  const Field = ({ name, label, type = "text", placeholder, extra }) => (
    <div>
      <label className="block text-sm font-medium text-primary mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={name === "password" || name === "confirm" ? (showPw ? "text" : "password") : type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 rounded-xl border text-primary placeholder:text-muted text-sm outline-none transition-all bg-secondary ${
            errors[name] ? "border-red-400" : "border-theme"
          } ${extra || ""}`}
        />
        {(name === "password" || name === "confirm") && (
          <button
            type="button"
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
          >
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-secondary">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
            <Zap size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl text-primary">
            Bolt<span style={{ color: "var(--accent)" }}>UI</span>
          </span>
        </div>

        <div className="p-8 rounded-2xl border border-theme shadow-theme-lg" style={{ backgroundColor: "var(--bg-card)" }}>
          <h1 className="text-2xl font-bold text-primary mb-1">Create an account</h1>
          <p className="text-secondary text-sm mb-6">Get started with BoltUI for free</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Field name="name" label="Full Name" placeholder="John Doe" />
            <Field name="email" label="Email" type="email" placeholder="you@example.com" />
            <Field name="password" label="Password" placeholder="Min. 6 characters" extra="pr-10" />
            <Field name="confirm" label="Confirm Password" placeholder="Repeat password" extra="pr-10" />

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
                  <UserPlus size={16} /> Create Account
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-secondary mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-accent font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
