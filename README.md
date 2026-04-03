# ⚡ BoltUI — React Boilerplate

A production-ready React starter with everything configured so you can skip setup and start building.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

## 🔐 Demo Credentials

| Role  | Email             | Password  | Redirect       |
|-------|-------------------|-----------|----------------|
| User  | user@demo.com     | user123   | /dashboard     |
| Admin | admin@demo.com    | admin123  | /admin         |

## 📁 Project Structure

```
src/
├── components/
│   └── layout/
│       ├── Navbar.jsx          # Public navbar with theme toggle + mobile menu
│       ├── Footer.jsx          # Responsive footer with links
│       ├── PublicLayout.jsx    # Wrapper for public pages
│       ├── UserSidebar.jsx     # Collapsible user dashboard sidebar
│       ├── AdminSidebar.jsx    # Admin panel sidebar
│       ├── DashboardHeader.jsx # User dashboard top bar
│       └── AdminHeader.jsx     # Admin top bar
├── context/
│   ├── AuthContext.jsx         # Auth state, login, register, logout
│   └── ThemeContext.jsx        # Light/dark theme management
├── pages/
│   ├── public/                 # Home, About, Products, Contact, Login, Register
│   ├── user/                   # UserDashboard, UserProfile
│   ├── admin/                  # AdminDashboard
│   ├── PlaceholderPage.jsx     # Template for unbuilt pages
│   └── ErrorPages.jsx          # 404 and Unauthorized
├── utils/
│   └── RouteGuards.jsx         # ProtectedRoute + GuestRoute
├── App.jsx                     # All routes wired up
├── main.jsx
└── index.css                   # Tailwind v4 + CSS variables for theming
```

## 🛠 Tech Stack

| Package           | Version | Purpose                        |
|-------------------|---------|--------------------------------|
| React             | 19      | UI library                     |
| React Router DOM  | 7       | Client-side routing            |
| Tailwind CSS      | 4       | Utility-first styling          |
| Axios             | 1.7     | HTTP client (ready to use)     |
| React Toastify    | 10      | Toast notifications            |
| Lucide React      | 0.400   | Icons                          |
| Vite              | 6       | Build tool                     |

## 🎨 Theme System

The project uses CSS variables defined in `index.css` and toggled via `data-theme` on `<html>`. 

Custom utilities like `.bg-primary`, `.text-secondary`, `.border-theme` are available everywhere.

To switch theme: click the 🌙/☀️ button in the navbar or any dashboard header.

## 📦 Adding Real API Calls

`axios` is installed. Create a service file:

```js
// src/services/api.js
import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// Add auth token to every request
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("auth_user") || "{}");
  if (user.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

export default api;
```

## 🔒 Route Protection

- `<ProtectedRoute>` — requires any logged-in user
- `<ProtectedRoute requiredRole="admin">` — requires admin role
- `<GuestRoute>` — redirects logged-in users away from login/register

## 📱 Responsive Breakpoints

| Breakpoint | Width   | Sidebar behavior          |
|------------|---------|---------------------------|
| Mobile     | < 1024px | Hidden, toggle with ☰    |
| Desktop    | ≥ 1024px | Always visible (static)   |
