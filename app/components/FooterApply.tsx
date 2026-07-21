import Image from "next/image";
import { LinkedInIcon, InstagramIcon } from "./Footer";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <LinkedInIcon /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <InstagramIcon /> },
];

export default function FooterApply({
  background = true,
}: {
  /* Set to false when a parent wrapper already supplies the dark gradient
     (e.g. when the footer sits flush against a section above it) */
  background?: boolean;
}) {
  return (
    <footer
      className={`w-full px-4 pb-10 pt-16 ${background ? "footer-gradient" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-[82.5rem] flex-col items-center">
        {/* Brand */}
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

        {/* Socials */}
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

        {/* Bottom row: copyright + legal links */}
        <div className="mt-15 w-full border-t border-white/20 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="font-sans text-base tracking-[-1px] text-white/80">
              Optimability Inc. © 2026
            </p>
            <div className="flex items-center gap-16">
              <a
                href="/terms"
                className="font-sans text-base tracking-[-1px] text-white/80 transition-colors hover:text-white"
              >
                Terms
              </a>
              <a
                href="/privacy"
                className="font-sans text-base tracking-[-1px] text-white/80 transition-colors hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
