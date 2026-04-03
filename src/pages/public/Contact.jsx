import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { toast } from "react-toastify";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@boltui.dev", href: "mailto:hello@boltui.dev" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: MapPin, label: "Address", value: "San Francisco, CA 94103", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you soon 🎉");
    setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-theme" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 tracking-tight">
            Get in <span style={{ color: "var(--accent)" }}>Touch</span>
          </h1>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold text-primary mb-2">Contact Information</h2>
                <p className="text-secondary text-sm leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <Icon size={17} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-medium">{label}</p>
                      <p className="text-primary text-sm font-semibold">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className="p-5 rounded-2xl border border-theme mt-2"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={16} style={{ color: "var(--accent)" }} />
                  <p className="font-semibold text-primary text-sm">Live Chat</p>
                </div>
                <p className="text-secondary text-xs leading-relaxed">
                  Our support team is available Monday–Friday, 9am–6pm PST.
                </p>
                <button
                  className="mt-3 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                  onClick={() => toast.info("Live chat coming soon!")}
                >
                  Start Chat
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div
                className="p-6 sm:p-8 rounded-2xl border border-theme"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <h2 className="text-xl font-bold text-primary mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted text-sm outline-none focus:ring-2 transition-all"
                        style={{ "--tw-ring-color": "var(--accent)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted text-sm outline-none focus:ring-2 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted text-sm outline-none focus:ring-2 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted text-sm outline-none focus:ring-2 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={15} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
