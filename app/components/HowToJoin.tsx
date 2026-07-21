import Image from "next/image";
import cardFade from "../images/how-to-join/card-fade.png";
import callPortrait from "../images/how-to-join/call-portrait.png";
import callPortraitCutout from "../images/how-to-join/call-portrait-cutout.png";

/* ------------------------------------------------------------------------ */
/* Decorative blurred wave backdrop (exported 1:1 from Figma)               */
/* ------------------------------------------------------------------------ */

const WAVE_PATH_A =
  "M474.207 165.261L437.339 159.371C352.193 145.769 264.923 158.144 186.915 194.883L171.779 203.497C154.814 213.152 148.958 234.775 158.733 251.671C164.708 261.999 175.511 268.593 187.428 269.185L315.948 275.571H529.26L626.296 271.289C672.311 269.258 718.415 271.84 763.916 278.997L866.041 295.058C880.529 297.337 895.265 297.578 909.821 295.774L1075.88 275.191C1103.19 271.806 1118.87 242.347 1106.42 217.802C1099.35 203.854 1084.75 195.355 1069.13 196.088L905.327 203.779C869.4 205.465 833.581 198.68 800.76 183.972C766.373 168.561 728.719 161.859 691.127 164.458L598.9 170.836C557.259 173.716 515.425 171.845 474.207 165.261Z";

const WAVE_PATH_B =
  "M474.152 165.151L437.009 159.292C351.983 145.879 264.889 158.101 186.839 194.4L171.687 202.916C154.786 212.414 148.961 233.927 158.761 250.655C164.675 260.751 175.284 267.181 186.97 267.754L315.873 274.079H529.185L627.078 269.813C672.526 267.833 718.058 270.352 763.01 277.333L866.349 293.383C880.585 295.594 895.057 295.827 909.356 294.077L1076.12 273.666C1103.2 270.351 1118.7 241.092 1106.24 216.826C1099.22 203.165 1084.88 194.856 1069.54 195.568L905.142 203.19C869.276 204.852 833.515 198.154 800.682 183.624C766.285 168.401 728.697 161.785 691.17 164.348L598.788 170.656C557.168 173.498 515.36 171.652 474.152 165.151Z";

const WAVE_PATH_C =
  "M473.376 164.294L434.314 158.711C350.238 146.695 264.477 157.768 186.21 190.746L170.907 198.537C154.559 206.861 149.004 227.5 158.965 242.905C164.401 251.312 173.569 256.568 183.57 257.013L315.113 262.86H528.21L632.317 258.75C673.539 257.123 714.824 259.196 755.676 264.944L867.867 280.73C880.219 282.468 892.74 282.652 905.138 281.277L1076.95 262.225C1102.22 259.423 1116.39 231.69 1103.85 209.57C1097.3 198.014 1084.83 191.096 1071.56 191.654L903.012 198.733C867.612 200.22 832.301 194.171 799.416 180.985C764.979 167.178 727.902 161.203 690.871 163.494L597.489 169.272C556.056 171.835 514.47 170.167 473.376 164.294Z";

const WAVE_PATH_D =
  "M473.275 164.116L433.836 158.598C349.927 146.857 264.406 157.7 186.082 190.009L170.736 197.658C154.51 205.746 149.016 226.206 159.008 241.334C164.343 249.411 173.226 254.441 182.896 254.862L314.985 260.611H528.081L633.48 256.537C673.846 254.977 714.271 256.965 754.29 262.477L868.306 278.184C880.283 279.834 892.417 280.008 904.437 278.703L1077.29 259.937C1102.2 257.233 1116.09 229.808 1103.54 208.128C1097.09 196.987 1084.99 190.34 1072.13 190.869L902.734 197.835C867.418 199.287 832.186 193.367 799.284 180.452C764.832 166.929 727.846 161.082 690.904 163.32L597.311 168.988C555.907 171.496 514.355 169.864 473.275 164.116Z";

type Wave = {
  id: string;
  wrapper: string;
  inset: string;
  viewBox: string;
  filter: { w: number; h: number };
  gradient: { x1: number; y1: number; x2: number; y2: number; from: string; to: string };
  d: string;
};

const WAVES: Wave[] = [
  {
    id: "wave-1",
    wrapper: "left-[-274px] top-[-55px] h-[160px] w-[991px]",
    inset: "inset-[-86.56%_-13.4%_-95.3%_-14.23%]",
    viewBox: "0 0 1264.75 450.968",
    filter: { w: 1264.75, h: 450.968 },
    gradient: { x1: 636.498, y1: 138.493, x2: 632.537, y2: 274.53, from: "#FAFAFA", to: "#4F92BA" },
    d: WAVE_PATH_A,
  },
  {
    id: "wave-2",
    wrapper: "left-[-274px] top-[35px] h-[158px] w-[991px]",
    inset: "inset-[-87.79%_-13.39%_-96.53%_-14.22%]",
    viewBox: "0 0 1264.61 449.236",
    filter: { w: 1264.61, h: 449.236 },
    gradient: { x1: 636.422, y1: 138.715, x2: 632.56, y2: 273.054, from: "#0872A9", to: "#011A29" },
    d: WAVE_PATH_B,
  },
  {
    id: "wave-3",
    wrapper: "left-[-274px] top-[194px] h-[143px] w-[990px]",
    inset: "inset-[-98.14%_-13.35%_-106.88%_-14.18%]",
    viewBox: "0 0 1262.49 436.187",
    filter: { w: 1262.49, h: 436.187 },
    gradient: { x1: 635.339, y1: 140.347, x2: 632.172, y2: 261.951, from: "#0872A9", to: "#011A29" },
    d: WAVE_PATH_C,
  },
  {
    id: "wave-4",
    wrapper: "left-[-274px] top-[125px] h-[140px] w-[990px]",
    inset: "inset-[-100.48%_-13.34%_-109.21%_-14.16%]",
    viewBox: "0 0 1262.24 433.567",
    filter: { w: 1262.24, h: 433.567 },
    gradient: { x1: 635.21, y1: 140.668, x2: 632.175, y2: 259.723, from: "#7BCCF8", to: "#507D98" },
    d: WAVE_PATH_D,
  },
  {
    id: "wave-5",
    wrapper: "left-[-265px] top-[274px] h-[143px] w-[990px]",
    inset: "inset-[-98.14%_-13.35%_-106.88%_-14.18%]",
    viewBox: "0 0 1262.49 436.187",
    filter: { w: 1262.49, h: 436.187 },
    gradient: { x1: 635.339, y1: 140.347, x2: 632.172, y2: 261.951, from: "#011A29", to: "#0872A9" },
    d: WAVE_PATH_C,
  },
];

function WaveBackdrop({
  idPrefix,
  edgesOnly = false,
}: {
  idPrefix: string;
  edgesOnly?: boolean;
}) {
  const waves = edgesOnly ? [WAVES[0], WAVES[4]] : WAVES;

  return (
    <>
      {waves.map((wave) => {
        const id = `${idPrefix}-${wave.id}`;
        return (
          <div key={id} aria-hidden className={`absolute ${wave.wrapper}`}>
            <div className={`absolute ${wave.inset}`}>
              <svg
                className="block size-full max-w-none"
                viewBox={wave.viewBox}
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter={`url(#${id}-blur)`}>
                  <path d={wave.d} fill={`url(#${id}-fill)`} />
                </g>
                <defs>
                  <filter
                    id={`${id}-blur`}
                    x="0"
                    y="0"
                    width={wave.filter.w}
                    height={wave.filter.h}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="77" result="effect1_foregroundBlur" />
                  </filter>
                  <linearGradient
                    id={`${id}-fill`}
                    x1={wave.gradient.x1}
                    y1={wave.gradient.y1}
                    x2={wave.gradient.x2}
                    y2={wave.gradient.y2}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={wave.gradient.from} />
                    <stop offset="1" stopColor={wave.gradient.to} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Small icons                                                              */
/* ------------------------------------------------------------------------ */

function CheckBadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18.35 18.35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="9.175" cy="9.175" r="8.499" stroke="#2ABF68" strokeWidth="1.352" />
      <path
        d="M12.616 6.418L7.799 11.923L5.735 9.859"
        stroke="#2ABF68"
        strokeWidth="1.352"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CallEndIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 4.125C7.2585 4.125 8.5 4.4025 9.65 4.9355C10.276 5.226 10.625 5.883 10.625 6.5735V7C10.625 7.23206 10.5328 7.45462 10.3687 7.61872C10.2046 7.78281 9.98206 7.875 9.75 7.875H8.75C8.51794 7.875 8.29538 7.78281 8.13128 7.61872C7.96719 7.45462 7.875 7.23206 7.875 7V6.754C7.875 6.55509 7.79598 6.36432 7.65533 6.22367C7.51468 6.08302 7.32391 6.004 7.125 6.004H4.875C4.67609 6.004 4.48532 6.08302 4.34467 6.22367C4.20402 6.36432 4.125 6.55509 4.125 6.754V7C4.125 7.11491 4.10237 7.22869 4.05839 7.33485C4.01442 7.44101 3.94997 7.53747 3.86872 7.61872C3.78747 7.69997 3.69101 7.76442 3.58485 7.80839C3.47869 7.85237 3.36491 7.875 3.25 7.875H2.25C2.01794 7.875 1.79538 7.78281 1.63128 7.61872C1.46719 7.45462 1.375 7.23206 1.375 7V6.5735C1.375 5.8835 1.724 5.226 2.35 4.9355C3.49303 4.40247 4.7388 4.12584 6 4.125Z"
        stroke="white"
        strokeWidth="0.625"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BloodDropIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(3.664 0.336)">
        <path
          d="M11.75 13.1202C11.75 14.612 11.1574 16.0428 10.1025 17.0976C9.04758 18.1525 7.61684 18.7452 6.125 18.7452C4.63316 18.7452 3.20242 18.1525 2.14752 17.0976C1.09263 16.0428 0.5 14.612 0.5 13.1202C0.5 9.06183 4.20667 2.9435 5.60167 0.786833C5.65778 0.69891 5.73514 0.626542 5.82661 0.57641C5.91807 0.526279 6.0207 0.5 6.125 0.5C6.2293 0.5 6.33193 0.526279 6.42339 0.57641C6.51486 0.626542 6.59222 0.69891 6.64833 0.786833C8.04333 2.9435 11.75 9.06183 11.75 13.1202Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.125 16.2486C5.71441 16.2486 5.30784 16.1677 4.92854 16.0105C4.54923 15.8533 4.20462 15.6229 3.91441 15.3324C3.62419 15.042 3.39406 14.6972 3.23716 14.3177C3.08026 13.9383 2.99967 13.5317 3 13.1211"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------------ */
/* Step 1 — contact form mockup                                             */
/* ------------------------------------------------------------------------ */

function FormVisual() {
  return (
    <>
      <WaveBackdrop idPrefix="step1" />

      {/* Translucent form panel */}
      <div className="absolute left-1/2 top-[60px] h-[357px] w-[286px] max-w-[calc(100%-16px)] -translate-x-1/2 rounded-lg bg-[#f4f4f4]/12" />

      <p className="absolute left-1/2 top-[82px] w-[254px] max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-base leading-[22px] tracking-[-1px] text-white">
        Fill contact form
      </p>

      {/* Input placeholders */}
      <div className="absolute left-1/2 top-[108px] h-8 w-[254px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded bg-linear-to-r from-[#c2c2c2] to-[#e2e2e2] opacity-20" />
      <div className="absolute left-1/2 top-[156px] h-8 w-[254px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded bg-linear-to-r from-[#ebebeb] to-[#c2c2c2] opacity-20" />
      <div
        className="absolute left-1/2 top-[252px] h-8 w-[254px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded opacity-20"
        style={{ backgroundImage: "linear-gradient(90deg, #ebebeb 0%, #c2c2c2 230.51%)" }}
      />

      {/* Email chip */}
      <div className="absolute left-[calc(50%+0.38px)] top-[calc(50%+40.91px)] flex h-[47.71px] w-[319.288px] max-w-[calc(100%-8px)] -translate-x-1/2 -translate-y-1/2 rotate-2 items-center justify-between gap-2 rounded-[4.893px] bg-white px-[14.68px] shadow-[1.223px_3.67px_7.34px_0px_rgba(0,0,0,0.28)]">
        <p className="truncate font-sans text-[17.127px] leading-[34.705px] tracking-[-1.5775px] text-black">
          founder@company.com
        </p>
        <CheckBadgeIcon className="size-[18.35px] shrink-0" />
      </div>

      {/* Submit button */}
      <div className="absolute left-1/2 top-[306px] flex h-8 w-[254px] max-w-[calc(100%-48px)] -translate-x-1/2 items-center justify-center rounded-[20px] bg-linear-to-b from-brand-deep to-brand-ocean">
        <span className="font-sans text-sm leading-7 tracking-[-1px] text-white">Submit</span>
      </div>

      {/* Bottom shade */}
      <Image
        src={cardFade}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-[317px] h-[374px] w-full max-w-none object-cover"
      />
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Step 2 — call mockup                                                     */
/* ------------------------------------------------------------------------ */

const WAVEFORM_BARS = [
  33, 27, 15, 29, 13, 5, 19, 25, 21, 21, 29, 31, 23, 29, 23, 15, 19, 9, 21, 19, 21, 29, 19, 11, 5,
  15, 9, 13, 17, 21, 11, 17, 13,
];

function CallVisual() {
  return (
    <>
      <WaveBackdrop idPrefix="step2" edgesOnly />

      {/* Layer 1: background portrait photo (full photo, fills its frame) */}
      <div className="absolute left-[99px] top-[55px] h-[233px] w-[187px] overflow-hidden rounded-lg">
        <Image
          src={callPortrait}
          alt="Optimability team member smiling during an intro call"
          fill
          sizes="187px"
          className="object-cover"
        />
      </div>

      {/* Layer 2: call UI card */}
      <div className="absolute left-[45px] top-[110px] h-[87px] w-[241px] overflow-hidden rounded-[4.893px] bg-white shadow-[1.223px_3.67px_7.34px_0px_rgba(0,0,0,0.28)]">
        <div className="absolute left-2 top-2 flex size-7 items-center justify-center rounded-full bg-[#bdcd86]">
          <span className="font-sans text-sm leading-[22px] tracking-[-1px] text-white">S</span>
        </div>
        <p className="absolute left-[42px] top-[14.5px] -translate-y-1/2 whitespace-nowrap font-sans text-[13px] leading-[22px] tracking-[-1px] text-black">
          Optimability
        </p>
        <p className="absolute left-[42px] top-[30.5px] -translate-y-1/2 whitespace-nowrap font-sans text-[10px] leading-[22px] tracking-[-1px] text-black/60">
          0:22
        </p>
        <div className="absolute left-[209px] top-[10px] flex size-6 items-center justify-center rounded-full bg-[#b12121]">
          <CallEndIcon className="size-3" />
        </div>

        {/* Audio waveform */}
        <div className="absolute left-3 top-[60.5px] flex -translate-y-1/2 items-center gap-0.5">
          {WAVEFORM_BARS.map((height, index) => (
            <div
              key={index}
              className="w-[3px] rounded-full bg-[#d9d9d9]"
              style={{ height }}
            />
          ))}
        </div>
      </div>

      {/* Layer 3: transparent cutout of the same person, popping out over the call card */}
      <div className="pointer-events-none absolute left-[99px] top-[55px] h-[233px] w-[187px] overflow-hidden rounded-lg">
        <Image src={callPortraitCutout} alt="" aria-hidden fill sizes="187px" className="object-cover" />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Step 3 — phone notifications mockup                                      */
/* ------------------------------------------------------------------------ */

function PhoneNotification({
  positionClass,
  tile,
  title,
  subtitle,
}: {
  positionClass: string;
  tile: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`absolute left-[10px] h-[60px] w-[384px] overflow-hidden rounded-lg border-[0.5px] border-black/20 bg-white ${positionClass}`}
    >
      {tile}
      <p className="absolute left-[60px] top-[19.5px] -translate-y-1/2 whitespace-nowrap font-sans text-base leading-[22px] tracking-[-1px] text-black">
        {title}
      </p>
      <p className="absolute left-[60px] top-[41px] -translate-y-1/2 whitespace-nowrap font-sans text-xs leading-[22px] tracking-[-1px] text-black/60">
        {subtitle}
      </p>
    </div>
  );
}

function SkeletonNotification({ positionClass }: { positionClass: string }) {
  return (
    <div
      className={`absolute left-3 h-[60px] w-[275px] overflow-hidden rounded-lg border-[0.5px] border-black/10 bg-white ${positionClass}`}
    >
      <div className="absolute left-[7.5px] top-[7.5px] h-11 w-[45px] rounded bg-linear-to-r from-[#e0e0e0] to-[#f9f9f9]" />
      <div className="absolute left-[62.5px] top-[12.5px] h-[13px] w-[249px] rounded-lg bg-linear-to-r from-[#e0e0e0] to-[#f9f9f9]" />
      <div className="absolute left-[62.5px] top-[37.5px] h-[9px] w-[198px] rounded-lg bg-linear-to-r from-[#e0e0e0] to-[#f9f9f9]" />
    </div>
  );
}

function PhoneVisual() {
  return (
    <>
      <WaveBackdrop idPrefix="step3" />

      {/* Phone frame */}
      <div className="absolute left-[calc(50%+63.5px)] top-[46px] h-[482px] w-[335px] -translate-x-1/2 overflow-hidden rounded-[40px] border-[6px] border-black/20 bg-[#f4f4f4]">
        {/* Notch */}
        <div className="absolute left-1/2 top-[10px] h-4 w-[91px] -translate-x-1/2 rounded-full bg-black/20" />

        <PhoneNotification
          positionClass="top-[58px]"
          title="You are approved"
          subtitle="Your program starts tomorrow"
          tile={
            <div className="absolute left-[9.5px] top-[9.5px] flex size-10 items-center justify-center rounded-lg bg-linear-to-b from-brand-deep to-brand-ocean">
              <Image src="/optimability-logo.svg" alt="" aria-hidden width={24} height={24} unoptimized />
            </div>
          }
        />
        <PhoneNotification
          positionClass="top-[134px]"
          title="Blood draw scheduled"
          subtitle="Thursday 7:30 AM · At your home"
          tile={
            <div className="absolute left-[9.5px] top-[9.5px] flex size-10 items-center justify-center rounded-lg bg-linear-to-b from-[#076c4f] to-[#10bc8b]">
              <BloodDropIcon className="size-5" />
            </div>
          }
        />

        <SkeletonNotification positionClass="top-[206px]" />
        <SkeletonNotification positionClass="top-[282px]" />
      </div>

      {/* Bottom shade */}
      <Image
        src={cardFade}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-[317px] h-[374px] w-full max-w-none object-cover"
      />

      {/* Right shade */}
      <div className="pointer-events-none absolute right-[-349px] top-[-7px] flex h-[384px] w-[374px] items-center justify-center">
        <div className="relative h-[374px] w-[384px] flex-none -rotate-90">
          <Image src={cardFade} alt="" aria-hidden fill sizes="384px" className="object-cover" />
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------------ */
/* Section                                                                  */
/* ------------------------------------------------------------------------ */

const STEPS = [
  {
    label: "Step 1",
    description:
      "Fill out a short contact form with your basic information so we can prepare for your call",
    descriptionClass: "max-w-[351px]",
    visual: <FormVisual />,
  },
  {
    label: "Step 2",
    description:
      "We get on a call to understand your goals, current health situation, and whether Optimability is the right fit for you",
    descriptionClass: "max-w-[384px]",
    visual: <CallVisual />,
  },
  {
    label: "Step 3",
    description:
      "Once approved, your full health system goes live. The team handles everything from here",
    descriptionClass: "max-w-[353px]",
    visual: <PhoneVisual />,
  },
];

export default function HowToJoin() {
  return (
    <section
      id="how-it-works"
      className="w-full px-4 pt-20 md:pt-28 lg:pt-36"
      aria-label="How to join Optimability"
    >
      {/* Heading */}
      <h2 className="text-center font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
        How to join Optimability
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mt-4 max-w-[355px] text-center font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80">
        Fill out a short form, schedule a call with our team, and if you are a
        good fit, your program starts
      </p>

      {/* Step cards */}
      <div className="mx-auto mt-8 grid w-full max-w-[82.5rem] grid-cols-1 gap-6 lg:grid-cols-3">
        {STEPS.map(({ label, description, descriptionClass, visual }) => (
          <div
            key={label}
            className="flex min-h-[30rem] flex-col rounded-lg bg-surface-muted p-5"
          >
            <div className="relative h-[22.1875rem] w-full overflow-hidden rounded-lg bg-white">
              {visual}
            </div>

            <h3 className="mt-4 font-sans text-xl leading-[1.375rem] tracking-[-1px] text-black">
              {label}
            </h3>
            <p
              className={`mt-2 font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 ${descriptionClass}`}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
