import Image from "next/image";
import CtaButton from "./CtaButton";
import heroImage from "../images/hero-image.png";

const TITLE = "One System Running Your Entire Health And Performance";

/* Delay before the first headline character starts revealing */
const TITLE_DELAY = 0.15;
/* Stagger between consecutive characters */
const CHAR_STAGGER = 0.018;

function AnimatedTitle() {
  let charIndex = 0;
  return (
    <h1
      aria-label={TITLE}
      className="mt-6 max-w-[61.25rem] text-center font-jakarta text-[2.25rem] font-medium leading-[1.15] text-white md:text-[3rem] lg:text-[3.5rem]"
    >
      {TITLE.split(" ").map((word, w) => (
        <span key={w} aria-hidden>
          {w > 0 && " "}
          <span className="hero-word">
            {word.split("").map((ch, c) => (
              <span
                key={c}
                className="hero-char"
                style={{
                  animationDelay: `${(TITLE_DELAY + charIndex++ * CHAR_STAGGER).toFixed(3)}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}

/* Slowly counter-rotating dashed rings behind the headline, plus a drifting
   glow — both purely ambient, hidden from assistive tech */
function AmbientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="hero-glow absolute left-1/2 top-[4rem] h-[26rem] w-[42rem] max-w-[120vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(64, 156, 255, 0.35), rgba(64, 156, 255, 0) 70%)",
        }}
      />
      <svg
        className="absolute left-1/2 top-[16rem] w-[75rem] max-w-none -translate-x-1/2 -translate-y-1/2 md:top-[19rem]"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        <g className="hero-ring">
          <circle
            cx="600"
            cy="600"
            r="380"
            stroke="rgba(255, 255, 255, 0.10)"
            strokeWidth="1"
            strokeDasharray="5 16"
          />
          <circle
            cx="600"
            cy="600"
            r="560"
            stroke="rgba(255, 255, 255, 0.07)"
            strokeWidth="1"
            strokeDasharray="4 20"
          />
        </g>
        <g className="hero-ring hero-ring-rev">
          <circle
            cx="600"
            cy="600"
            r="470"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
            strokeDasharray="6 18"
          />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center px-4 pt-[11.25rem]">
      <AmbientBackdrop />

      {/* Badge */}
      <div
        className="hero-rise flex h-8 w-[12.5rem] items-center justify-center rounded-full bg-white/12"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="font-sans text-base leading-none text-white">
          For Founders &amp; Teams
        </span>
      </div>

      {/* Title */}
      <AnimatedTitle />

      {/* Subtitle */}
      <p
        className="hero-rise mt-7 max-w-[32.5rem] text-center font-sans text-base leading-6 text-white/80"
        style={{ animationDelay: "0.55s" }}
      >
        One system running your nutrition, training, recovery, and testing so
        you can operate at full capacity without managing anything
      </p>

      {/* CTA button */}
      <div className="hero-rise mt-10" style={{ animationDelay: "0.7s" }}>
        <CtaButton label="Get Started" href="#apply" />
      </div>

      {/* Hero image */}
      <div
        className="hero-rise w-full max-w-[82.5rem]"
        style={{ animationDelay: "0.85s" }}
      >
        <Image
          src={heroImage}
          alt="Two people in a meeting behind frosted glass"
          width={1320}
          height={720}
          priority
          className="mt-10 -mb-24 h-auto w-full rounded-xl object-cover sm:-mb-40 md:mt-16 md:-mb-48 md:rounded-[1.25rem] lg:-mb-64 xl:-mb-[21.25rem]"
        />
      </div>
    </section>
  );
}
