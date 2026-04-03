import { Code2, Layers, Rocket, Heart } from "lucide-react";

const STACK = [
  { name: "React 19", desc: "Latest React with concurrent features" },
  { name: "Tailwind CSS v4", desc: "Utility-first CSS with CSS variables" },
  { name: "React Router v7", desc: "Type-safe client-side routing" },
  { name: "Axios", desc: "HTTP client for API requests" },
  { name: "React Toastify", desc: "Beautiful toast notifications" },
  { name: "Lucide React", desc: "Pixel-perfect icon library" },
  { name: "Vite 6", desc: "Lightning fast dev server & bundler" },
  { name: "Context API", desc: "State management without extra deps" },
];

const TEAM = [
  { name: "Design System", role: "CSS Variables + Tailwind", icon: Layers },
  { name: "Auth System", role: "Context + LocalStorage", icon: Code2 },
  { name: "Routing", role: "React Router v7 guards", icon: Rocket },
  { name: "Developer UX", role: "Structured & scalable", icon: Heart },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-5 tracking-tight">
            About <span style={{ color: "var(--accent)" }}>BoltUI</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            BoltUI is a carefully crafted React boilerplate designed to eliminate setup time. Built by developers, for developers who want to focus on building features — not infrastructure.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-5">Why this boilerplate?</h2>
              <div className="flex flex-col gap-4 text-secondary leading-relaxed">
                <p>Every project starts with the same setup: routing, auth, dark mode, responsive layouts, toast notifications... It takes hours to get everything right.</p>
                <p>BoltUI packages all of that into a clean, opinionated starter so you can skip the boilerplate and jump straight into your unique features.</p>
                <p>All components are built with scalability in mind — easy to extend, customize, and replace as your project grows.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {TEAM.map(({ name, role, icon: Icon }) => (
                <div
                  key={name}
                  className="p-5 rounded-2xl border border-theme"
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "var(--accent-light)" }}>
                    <Icon size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <p className="font-semibold text-primary text-sm mb-0.5">{name}</p>
                  <p className="text-muted text-xs">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STACK.map(({ name, desc }) => (
              <div
                key={name}
                className="p-4 rounded-xl border border-theme flex items-start gap-3"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                <div>
                  <p className="font-semibold text-primary text-sm">{name}</p>
                  <p className="text-muted text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
