import Image from "next/image";

const NAV_COLUMNS: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Explore",
    links: [
      { label: "How We Help You", href: "#how-we-help-you" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Founders", href: "#founders" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M4.98 3.5a1.75 1.75 0 1 1-.02 3.5 1.75 1.75 0 0 1 .02-3.5ZM3.5 8.25h3v8.25h-3V8.25Zm5.25 0h2.87v1.13h.04c.4-.72 1.38-1.48 2.84-1.48 3.04 0 3.6 1.9 3.6 4.36v4.24h-3v-3.76c0-.9-.02-2.05-1.32-2.05-1.32 0-1.53.98-1.53 1.99v3.82h-3V8.25Z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.25" cy="5.75" r="0.9" fill="currentColor" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <LinkedInIcon /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <InstagramIcon /> },
];

export default function Footer({
  background = true,
}: {
  /* Set to false when a parent wrapper already supplies the dark gradient
     (e.g. when the footer sits flush against a section above it) */
  background?: boolean;
}) {
  return (
    <footer
      className={`w-full px-4 pb-10 pt-18 ${background ? "footer-gradient" : ""}`}
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand + socials */}
          <div>
            <a href="#" className="flex w-fit items-center gap-3">
              <Image
                src="/optimability-logo.svg"
                alt="Optimability logo"
                width={40}
                height={40}
                unoptimized
              />
              <span className="font-jakarta text-base font-semibold leading-6 tracking-[0.01em] text-white">
                Optimability
              </span>
            </a>
            <div className="mt-8 flex items-center gap-5">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-lg bg-white/20 text-white transition-colors hover:bg-white/30"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:w-[47.5rem] lg:grid-cols-[repeat(3,14.0625rem)_1fr] lg:gap-0"
          >
            {NAV_COLUMNS.map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-sans text-lg font-medium leading-6 text-white">
                  {title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="font-sans text-base leading-6 text-white/70 transition-colors hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8">
          <p className="font-sans text-sm text-white/60">
            Optimability Inc. © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
