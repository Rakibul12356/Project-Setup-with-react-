import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, BarChart3, Users, Star, ChevronRight } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Lightning Fast", desc: "Built with Vite for instant HMR and optimized production builds." },
  { icon: Shield, title: "Auth Ready", desc: "Dummy auth system with role-based access control out of the box." },
  { icon: BarChart3, title: "Dashboards", desc: "Full-featured user and admin dashboards with responsive sidebars." },
  { icon: Users, title: "Multi-Role", desc: "Separate user and admin experiences with route-level protection." },
];

const STATS = [
  { value: "20+", label: "Components" },
  { value: "2", label: "Dashboards" },
  { value: "4", label: "Public Pages" },
  { value: "100%", label: "Responsive" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
          >
            <Zap size={11} /> React Boilerplate v1.0
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary leading-tight tracking-tight mb-6">
            Build faster with
            <br />
            <span style={{ color: "var(--accent)" }}>BoltUI Starter</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            A production-ready React boilerplate with auth, dashboards, dark mode, routing, and everything you need to ship your next project in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get Started Free <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-theme text-primary hover:bg-secondary transition-all"
            >
              Explore Features <ChevronRight size={16} />
            </Link>
          </div>

          {/* Demo Login Hint */}
          <p className="mt-6 text-xs text-muted">
            Demo: <code className="bg-secondary px-1.5 py-0.5 rounded">user@demo.com</code> / <code className="bg-secondary px-1.5 py-0.5 rounded">user123</code>
            &nbsp;·&nbsp;
            <code className="bg-secondary px-1.5 py-0.5 rounded">admin@demo.com</code> / <code className="bg-secondary px-1.5 py-0.5 rounded">admin123</code>
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-theme py-12" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-primary mb-1" style={{ color: "var(--accent)" }}>{value}</p>
                <p className="text-secondary text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Everything you need</h2>
            <p className="text-secondary max-w-xl mx-auto">Stop setting up, start building. This boilerplate includes all the infrastructure you need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-theme hover:shadow-theme-lg transition-all duration-200 group"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "var(--accent-light)" }}
                >
                  <Icon size={20} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-semibold text-primary mb-2">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="var(--accent)" style={{ color: "var(--accent)" }} />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Ready to build something great?</h2>
          <p className="text-secondary mb-8">Create your account and start building with this boilerplate today.</p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Start Building <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
