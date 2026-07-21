import Image from "next/image";

/* ------------------------------------------------------------------------ */
/* Card A — phone with Morning Routine plan                                  */
/* ------------------------------------------------------------------------ */

function PlanVisual() {
  return (
    <div aria-hidden className="absolute inset-0">
      <Image
        src="/built-to-run/plan-visual.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 44vw, 92vw"
        className="object-cover"
      />
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Card B — Vitalized score + metrics dashboard                              */
/* ------------------------------------------------------------------------ */

function BiomarkersVisual() {
  return (
    <div aria-hidden className="absolute inset-0">
      {/* Mobile/tablet-specific crop (below lg) — matches the dedicated Figma mobile frame */}
      <Image
        src="/built-to-run/progress-visual-mobile.png"
        alt=""
        fill
        sizes="92vw"
        className="block object-cover object-top lg:hidden"
      />
      {/* Desktop crop (lg and up) — unchanged */}
      <Image
        src="/built-to-run/progress-visual-v6.png"
        alt=""
        fill
        sizes="62vw"
        className="hidden object-cover object-top lg:block"
      />
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Card C — AI Health Architect chat                                         */
/* ------------------------------------------------------------------------ */

function CheckCircleIcon({
  className,
  muted = false,
}: {
  className?: string;
  muted?: boolean;
}) {
  const stroke = muted ? "#c9cdc9" : "#2ABF68";
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="9" cy="9" r="8.3" stroke={stroke} strokeWidth="1.3" />
      {!muted && (
        <path
          d="M12.4 6.3 7.7 11.7 5.7 9.7"
          stroke={stroke}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.333 8h9.334M8.667 4 12.667 8l-4 4"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ANALYZED_FILES = [
  { name: "Sleep_report_latest.pdf", done: true },
  { name: "Adherence_log_this_week.pdf", done: true },
  { name: "Wearable_trends_7d.pdf", done: false },
];

function ArchitectVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #E7E0C3 0%, #D7CB9B 45%, #C5B677 100%)",
      }}
    >
      {/* Chat panel */}
      <div className="absolute left-1/2 top-[31px] h-[325px] w-[92%] max-w-[589px] -translate-x-1/2 rounded-xl bg-[#f4f4f4] shadow-[2px_2px_16px_0px_rgba(0,0,0,0.14)]">
        {/* User bubble */}
        <div className="absolute right-5 top-5 max-w-[calc(100%-40px)] rounded-lg bg-white px-4 py-2.5 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.1)]">
          <p className="font-sans text-sm leading-5 tracking-[-0.5px] text-black">
            Why did my score drop this week?
          </p>
        </div>

        {/* Analysis feed */}
        <div className="absolute left-6 top-[88px]">
          <p className="font-sans text-xs leading-4 tracking-[-0.3px] text-black/50">
            Analyzing your data...
          </p>
          <div className="mt-3.5 flex flex-col gap-3">
            {ANALYZED_FILES.map(({ name, done }) => (
              <div key={name} className="flex items-center gap-2.5">
                <CheckCircleIcon className="size-[18px] shrink-0" muted={!done} />
                <span
                  className={`font-sans text-[13px] leading-[18px] tracking-[-0.3px] ${
                    done ? "text-black" : "text-black/45"
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2.5 opacity-60">
                <CheckCircleIcon className="size-[18px] shrink-0" muted />
                <div className="h-2 w-40 rounded-full bg-linear-to-r from-[#d9d9d9] to-[#ececec]" />
              </div>
            ))}
          </div>
        </div>

        {/* Input bar */}
        <div className="absolute inset-x-5 bottom-4 flex h-11 items-center justify-between gap-2 rounded-lg border border-black/10 bg-white pl-4 pr-1.5">
          <span className="min-w-0 truncate font-sans text-xs leading-4 tracking-[-0.3px] text-black/40">
            Ask a question or log what happened...
          </span>
          <span className="flex size-8 items-center justify-center rounded-md bg-linear-to-b from-brand-navy to-brand-blue">
            <ArrowRightIcon className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Card D — wearables connect list                                           */
/* ------------------------------------------------------------------------ */

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="white"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

const WEARABLES = [
  {
    name: "Apple Watch",
    rotation: "rotate-[3deg]",
    offset: "top-[52px]",
    icon: <AppleIcon className="size-6" />,
  },
  {
    name: "Whoop",
    rotation: "rotate-[-3deg]",
    offset: "top-[150px]",
    icon: (
      <span className="flex size-6 items-center justify-center rounded-full border border-white font-sans text-[11px] text-white">
        W
      </span>
    ),
  },
  {
    name: "Garmin",
    rotation: "rotate-[2deg]",
    offset: "top-[248px]",
    icon: (
      <span className="font-sans text-[7px] font-bold tracking-[0.5px] text-white">
        GARMIN
      </span>
    ),
  },
];

function WearableVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #D6E4ED 0%, #9EBCCD 45%, #6E96AD 100%)",
      }}
    >
      {WEARABLES.map(({ name, rotation, offset, icon }) => (
        <div
          key={name}
          className={`absolute left-1/2 flex h-[72px] w-[88%] max-w-[340px] -translate-x-1/2 items-center gap-3 rounded-xl bg-white px-3 shadow-[2px_4px_14px_0px_rgba(0,0,0,0.18)] ${rotation} ${offset}`}
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-linear-to-b from-brand-deep to-brand-ocean">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="font-sans text-base leading-5 tracking-[-0.5px] text-black">
              {name}
            </p>
            <p className="mt-0.5 font-sans text-xs leading-4 tracking-[-0.3px] text-black/50">
              Not connected
            </p>
          </div>
          <span className="ml-auto font-sans text-sm leading-5 tracking-[-0.5px] text-brand-ocean">
            Connect
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Section                                                                   */
/* ------------------------------------------------------------------------ */

function BentoCard({
  title,
  description,
  descriptionClass = "",
  visualHeight,
  visual,
}: {
  title: string;
  description: string;
  descriptionClass?: string;
  visualHeight: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-lg bg-surface-muted p-5">
      <div className={`relative w-full overflow-hidden rounded-lg ${visualHeight}`}>
        {visual}
      </div>
      <h3 className="mt-3 font-sans text-xl leading-[1.375rem] tracking-[-1px] text-black">
        {title}
      </h3>
      <p
        className={`mt-2 font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 ${descriptionClass}`}
      >
        {description}
      </p>
    </div>
  );
}

export default function BuiltToRun() {
  return (
    <section
      id="built-to-run"
      className="w-full px-4 pt-20"
      aria-label="Built to run your health"
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        {/* Heading */}
        <h2 className="font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
          Built to run your health
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-[25rem] font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80">
          One app tracking your nutrition, training, recovery, and biomarkers
          so your team always knows what to do next
        </p>

        {/* Bento grid — row 1 (536 / 760) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[536fr_760fr]">
          <BentoCard
            title="Plan Based on Your Data"
            description="Your protocol changes as your biomarkers, training, and recovery data change. No static plans. Just constant adaptation to you."
            visualHeight="h-[22.25rem]"
            visual={<PlanVisual />}
          />
          <BentoCard
            title="Track Every Part of Your Progress"
            description="Every area of your health tracked on its own, so you always know exactly what is improving."
            descriptionClass="max-w-[27.5rem]"
            visualHeight="h-[22.25rem]"
            visual={<BiomarkersVisual />}
          />
        </div>

        {/* Bento grid — row 2 (872 / 424) */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[872fr_424fr]">
          <BentoCard
            title="Meet your AI Health Architect"
            description="Health Architect is Optimability's AI advisor, trained on your biomarkers, meals, and recovery data. Ask anything and get answers built around you."
            descriptionClass="max-w-[24rem]"
            visualHeight="h-[24.75rem]"
            visual={<ArchitectVisual />}
          />
          <BentoCard
            title="Connect Your Wearable"
            description="Our app syncs with your Whoop, Garmin, or Apple Watch automatically."
            descriptionClass="max-w-[16.5rem]"
            visualHeight="h-[24.75rem]"
            visual={<WearableVisual />}
          />
        </div>
      </div>
    </section>
  );
}
