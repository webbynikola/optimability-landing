export default function CtaButton({
  label = "See If You Qualify",
  href = "/apply",
  size = "default",
}: {
  label?: string;
  href?: string;
  size?: "default" | "nav";
}) {
  const isNav = size === "nav";

  return (
    <a
      href={href}
      className={
        isNav
          ? "group flex h-10 w-[9.5rem] items-center justify-between rounded-full bg-white pl-6 pr-1.5 transition-colors duration-200 hover:bg-brand-ocean"
          : "group flex h-12 w-fit items-center gap-3.5 rounded-full bg-white pl-4 pr-1.5 transition-colors duration-200 hover:bg-brand-ocean"
      }
    >
      <span className="font-sans text-base whitespace-nowrap text-brand-navy transition-colors duration-200 group-hover:text-white">
        {label}
      </span>
      <span
        className={`cta-gradient flex shrink-0 items-center justify-center rounded-full ${isNav ? "size-8" : "size-9"}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h13M12.5 6l6 6-6 6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
