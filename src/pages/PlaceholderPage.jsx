import { Construction } from "lucide-react";

export default function PlaceholderPage({ title = "Coming Soon", desc = "This page is under construction." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--accent-light)" }}
      >
        <Construction size={28} style={{ color: "var(--accent)" }} />
      </div>
      <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-secondary text-sm max-w-xs">{desc}</p>
    </div>
  );
}
