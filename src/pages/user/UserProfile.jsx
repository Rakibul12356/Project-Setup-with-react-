import { useState } from "react";
import { User, Mail, Calendar, Shield, Camera } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function UserProfile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: user?.name || "", email: user?.email || "" });
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    updateProfile(form);
    setEditing(false);
  };

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-primary">My Profile</h2>
        <p className="text-secondary text-sm mt-0.5">Manage your personal information</p>
      </div>

      {/* Avatar Card */}
      <div className="p-6 rounded-2xl border border-theme flex items-center gap-5" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="relative">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {user?.avatar}
          </div>
          <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-theme flex items-center justify-center shadow-sm">
            <Camera size={11} className="text-secondary" />
          </button>
        </div>
        <div>
          <p className="font-semibold text-primary">{user?.name}</p>
          <p className="text-secondary text-sm">{user?.email}</p>
          <span
            className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
          >
            <Shield size={10} /> {user?.role === "admin" ? "Administrator" : "User"}
          </span>
        </div>
      </div>

      {/* Info Form */}
      <div className="p-6 rounded-2xl border border-theme" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-primary">Personal Information</h3>
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-1.5 text-xs font-semibold rounded-lg text-accent border hover:bg-accent-light transition-all"
              style={{ borderColor: "var(--accent)" }}
            >
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button onClick={() => setEditing(false)} className="px-4 py-1.5 text-xs font-semibold rounded-lg border border-theme text-secondary hover:bg-secondary">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Save
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {[
            { icon: User, label: "Full Name", key: "name" },
            { icon: Mail, label: "Email Address", key: "email" },
          ].map(({ icon: Icon, label, key }) => (
            <div key={key} className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--accent-light)" }}>
                <Icon size={15} style={{ color: "var(--accent)" }} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted mb-1">{label}</p>
                {editing ? (
                  <input
                    value={form[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    className="w-full px-3 py-1.5 rounded-lg border border-theme bg-secondary text-sm text-primary outline-none"
                  />
                ) : (
                  <p className="text-sm text-primary font-medium">{user?.[key]}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--accent-light)" }}>
              <Calendar size={15} style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <p className="text-xs text-muted mb-1">Member Since</p>
              <p className="text-sm text-primary font-medium">{user?.joinedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
