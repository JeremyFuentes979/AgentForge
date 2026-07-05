import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

import {
  Bot,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cog,
  Flame,
  Home,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clawless AI — Zero-Code AI Agent Platform" },
      { name: "description", content: "Transform natural language into ready-to-use AI agents. No code required." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap", rel: "stylesheet" },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-300">404</h1>
        <p className="mt-2 text-gray-500">Page not found</p>
        <Link to="/" className="mt-4 inline-block text-violet-400 hover:text-violet-300 underline">
          Go home
        </Link>
      </div>
    </div>
  ),
  component: RootComponent,
});

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/builder", icon: Bot, label: "Agent Builder" },
  { to: "/enterprise", icon: Building2, label: "Enterprise" },
];

function RootComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <RootDocument>
      <div className="flex h-dvh overflow-hidden bg-gray-950">
        {/* Sidebar - Desktop */}
        <aside
          className={`hidden md:flex flex-col border-r border-gray-800 bg-gray-900/50 transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          {/* Logo */}
          <div className={`flex items-center border-b border-gray-800 px-4 h-16 ${sidebarOpen ? "justify-between" : "justify-center"}`}>
            {sidebarOpen ? (
              <>
                <Link to="/" className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600">
                    <Flame className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-base text-white">Clawless AI</span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label="Collapse sidebar"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label="Expand sidebar"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-violet-600/15 text-violet-300 border border-violet-600/20"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-transparent"
                  } ${!sidebarOpen && "justify-center"}`}
                  title={item.label}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-violet-400" : ""}`} />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Settings link at bottom */}
          <div className="border-t border-gray-800 px-3 py-3">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                const event = new CustomEvent("open-settings");
                window.dispatchEvent(event);
              }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-200 border border-transparent ${
                !sidebarOpen && "justify-center"
              }`}
              title="Settings"
            >
              <Cog className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>Settings</span>}
            </Link>
          </div>
        </aside>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-72 bg-gray-900 border-r border-gray-800 z-50 animate-slide-in-left">
              <div className="flex items-center justify-between px-4 h-16 border-b border-gray-800">
                <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600">
                    <Flame className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-base text-white">Clawless AI</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-300"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="px-3 py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-violet-600/15 text-violet-300 border border-violet-600/20"
                          : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-transparent"
                      }`}
                    >
                      <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-violet-400" : ""}`} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const event = new CustomEvent("open-settings");
                    window.dispatchEvent(event);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-transparent w-full transition-all duration-200"
                >
                  <Cog className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
            </aside>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar (mobile) */}
          <header className="md:hidden flex items-center justify-between px-4 h-14 border-b border-gray-800 bg-gray-900/50">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-400 hover:text-gray-200"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600">
                <Flame className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-bold text-sm text-white">Clawless AI</span>
            </div>
            <div className="w-5" />
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}