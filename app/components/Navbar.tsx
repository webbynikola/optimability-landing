"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";

const NAV_LINKS = [
  { label: "How We Help You", href: "/#how-we-help-you" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Founders", href: "/#founders" },
  { label: "FAQ", href: "/#faq" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* The apply page is a dedicated ads landing page — visitors shouldn't be
     able to navigate away from it, so it renders without the site nav */
  if (pathname?.startsWith("/apply")) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-4 pt-6">
      <nav className="mx-auto flex h-[3.25rem] w-full max-w-[64.875rem] items-center justify-between rounded-full border-[0.5px] border-surface-muted/40 bg-[#1d3746] pl-6 pr-1.5 backdrop-blur-[6px]">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/optimability-logo.svg"
            alt="Optimability logo"
            width={32}
            height={32}
            priority
            unoptimized
          />
          <span className="font-jakarta text-xs font-semibold leading-none tracking-[0.01em] text-white">
            Optimability
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link font-sans text-base leading-none tracking-[-1px] text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button — desktop only */}
        <div className="hidden lg:block">
          <CtaButton label="Get Started" href="/#apply" size="nav" />
        </div>

        {/* Hamburger — mobile & tablet */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 lg:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-y border-white/10 bg-brand-deep/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-3.5 font-sans text-base text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <CtaButton label="Get Started" href="/#apply" />
          </div>
        </div>
      )}
    </header>
  );
}
