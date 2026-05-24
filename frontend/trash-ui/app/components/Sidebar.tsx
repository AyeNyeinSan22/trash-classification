"use client";

import Link from "next/link";

type NavKey = "dashboard" | "scan" | "guide" | "shop" | "chat";

const navItems: Array<{
  key: NavKey;
  label: string;
  href?: string;
}> = [
  { key: "dashboard", label: "Dashboard", href: "/" },
  { key: "scan", label: "Scan & Identify", href: "/scan" },
  { key: "guide", label: "Recycle Guide" },
  { key: "shop", label: "Ecoshop" },
  { key: "chat", label: "Chatbot" },
];

export function Sidebar({ active }: { active: NavKey }) {
  return (
    <aside className="eco-sidebar" aria-label="Main navigation">
      <Link className="brand brand-link" href="/">
        <span className="brand-icon">🌿</span>
        <div>
          <strong>Group-6</strong>
          <span>Trash_Recognition</span>
        </div>
      </Link>

      <nav className="nav-stack">
        {navItems.map((item) => {
          const content = (
            <>
              <SidebarIcon type={item.key} />
              <span>{item.label}</span>
            </>
          );

          return item.href ? (
            <Link
              className={`nav-link ${active === item.key ? "is-active" : ""}`}
              href={item.href}
              key={item.key}
            >
              {content}
            </Link>
          ) : (
            <button
              className={`nav-link ${active === item.key ? "is-active" : ""}`}
              type="button"
              key={item.key}
            >
              {content}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function SidebarIcon({ type }: { type: NavKey }) {
  return (
    <span className="nav-icon custom-nav-icon" aria-hidden="true">
      {type === "dashboard" && <DashboardIcon />}
      {type === "scan" && <ScanIcon />}
      {type === "guide" && <GuideIcon />}
      {type === "shop" && <ShopIcon />}
      {type === "chat" && <ChatIcon />}
    </span>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img">
      <rect className="icon-bg" x="6" y="6" width="52" height="52" rx="12" />
      <rect className="icon-cell dark" x="16" y="16" width="15" height="15" rx="2" />
      <rect className="icon-cell" x="33" y="16" width="15" height="15" rx="2" />
      <rect className="icon-cell dark" x="16" y="33" width="15" height="15" rx="2" />
      <rect className="icon-cell light" x="33" y="33" width="15" height="15" rx="2" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img">
      <rect className="icon-bg" x="6" y="6" width="52" height="52" rx="12" />
      <path className="icon-stroke" d="M18 27v-8h8M38 19h8v8M46 38v8h-8M26 46h-8v-8" />
      <rect className="icon-mark" x="26" y="26" width="12" height="12" rx="4" />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img">
      <rect className="icon-bg" x="6" y="6" width="52" height="52" rx="12" />
      <path className="icon-fill" d="M17 18c8 0 12 2 15 6 3-4 7-6 15-6v27c-8 0-12 2-15 6-3-4-7-6-15-6V18Z" />
      <path className="book-line" d="M32 24v27M22 27h6M22 33h6M22 39h6M37 27h6M37 33h6M37 39h6" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img">
      <rect className="icon-bg" x="6" y="6" width="52" height="52" rx="12" />
      <path className="icon-fill" d="M19 26h26l-2 24H21L19 26Z" />
      <path className="icon-stroke dark-stroke" d="M25 26c0-7 3-11 7-11s7 4 7 11" />
      <path className="leaf-cut" d="M28 42c8-1 13-6 15-13-8 1-14 5-15 13Z" />
      <path className="icon-stroke" d="M30 41c4-2 7-5 10-9" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img">
      <rect className="icon-bg" x="6" y="6" width="52" height="52" rx="12" />
      <path className="icon-stroke" d="M32 16v7M27 16h10" />
      <rect className="icon-fill" x="18" y="25" width="28" height="20" rx="10" />
      <path className="icon-stroke" d="M18 33h-4M50 33h-4" />
      <circle className="bot-eye" cx="28" cy="35" r="2.3" />
      <circle className="bot-eye" cx="36" cy="35" r="2.3" />
    </svg>
  );
}
