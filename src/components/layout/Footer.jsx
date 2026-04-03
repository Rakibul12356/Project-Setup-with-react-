import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Contact", to: "/contact" },
  ],
  Account: [
    { label: "Login", to: "/login" },
    { label: "Register", to: "/register" },
    { label: "Dashboard", to: "/dashboard" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Cookie Policy", to: "#" },
  ],
};

const SOCIALS = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-theme"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-primary tracking-tight">
                Bolt<span style={{ color: "var(--accent)" }}>UI</span>
              </span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              A professional React boilerplate with everything you need to build modern web applications fast.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-primary border border-theme hover:border-accent transition-all duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-primary text-sm mb-4">{category}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-secondary hover:text-accent text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} BoltUI. All rights reserved.
          </p>
          <p className="text-muted text-xs flex items-center gap-1.5">
            Built with <Heart size={12} style={{ color: "var(--accent)" }} fill="var(--accent)" /> using React & Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
}
