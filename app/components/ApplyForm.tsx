"use client";

import { useState } from "react";

type ChoiceStep = {
  kind: "choice";
  question: string;
  options: string[];
};

type ContactStep = {
  kind: "contact";
  question: string;
};

type Step = ChoiceStep | ContactStep;

const STEPS: Step[] = [
  {
    kind: "choice",
    question:
      "Are you a founder, entrepreneur, executive, operator, or investor?",
    options: ["Yes", "None of the above"],
  },
  {
    kind: "choice",
    question:
      "Have you experienced problems in your business due to low energy, brain fog, stress, poor sleep, or inability to focus?",
    options: ["Yes", "No"],
  },
  {
    kind: "choice",
    question: "What is your organization's annual revenue?",
    options: ["Less than $200k", "$200k-$2M", "$2M-$10M", "$10M+"],
  },
  {
    kind: "choice",
    question:
      "Are you looking for a comprehensive solution that includes testing, protocols, chefs, trainers, and logistics management?",
    options: ["Yes", "No"],
  },
  {
    kind: "choice",
    question:
      "Are you willing to invest in a performance-based solution to optimize your energy and productivity?",
    options: ["Yes", "No"],
  },
  {
    kind: "contact",
    question: "Please provide your contact information",
  },
];

const PHONE_COUNTRIES = [
  { code: "US", flag: "🇺🇸", dial: "+1" },
  { code: "CA", flag: "🇨🇦", dial: "+1" },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "AU", flag: "🇦🇺", dial: "+61" },
  { code: "DE", flag: "🇩🇪", dial: "+49" },
  { code: "AE", flag: "🇦🇪", dial: "+971" },
  { code: "RS", flag: "🇷🇸", dial: "+381" },
];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4 md:size-5">
      <path
        d="M2.667 8h10.666M8.667 4l4 4-4 4"
        stroke="#011a29"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="size-7 md:size-9">
      <path
        d="m6 14.5 5.5 5.5L22 9"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ApplyForm({
  background = true,
  topGapClassName = "mt-20 md:mt-28 lg:mt-36",
}: {
  /* Set to false when a parent wrapper already supplies the dark gradient
     (e.g. when the form sits flush against the footer below it) */
  background?: boolean;
  /* Gap above the form — override per placement (e.g. tighter directly
     under the apply page's hero video) */
  topGapClassName?: string;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    STEPS.map(() => null),
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("US");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const canContinue =
    current.kind === "choice"
      ? answers[step] !== null
      : name.trim() !== "" && phone.trim() !== "" && email.includes("@");

  const selectOption = (option: string) => {
    setAnswers((prev) => prev.map((a, i) => (i === step ? option : a)));
  };

  const next = () => {
    if (!canContinue) return;
    if (isLast) {
      setSubmitted(true);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <section
      id="apply"
      className={`${topGapClassName} w-full overflow-hidden px-4 py-20 md:py-32 ${
        background ? "hero-gradient" : ""
      }`}
      aria-label="Apply to Optimability"
    >
      <h2 className="text-center font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-white md:text-[2.75rem] md:leading-[3.25rem] md:tracking-[-2px]">
        Apply to Optimability
      </h2>

      {/* Card stack — min-h so long questions can grow the card on narrow screens */}
      <div className="relative mx-auto mt-12 flex min-h-[25.5625rem] w-full max-w-[26.5rem] flex-col md:mt-19 md:min-h-[31.5rem] md:max-w-[33rem]">
        <div
          aria-hidden
          className="absolute inset-0 -rotate-3 rounded-lg bg-[#96a5ae]"
        />
        <div
          aria-hidden
          className="absolute inset-0 rotate-3 rounded-lg bg-[#bcc4c8]"
        />

        <div className="relative flex flex-1 flex-col rounded-lg bg-white p-6 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.18)] md:p-8">
          {submitted ? (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-linear-to-br from-brand-deep to-brand-ocean md:size-20">
                <CheckIcon />
              </div>
              <p className="mt-6 font-sans text-xl leading-7 tracking-[-1px] text-black md:text-2xl md:leading-8">
                Application received
              </p>
              <p className="mt-2 max-w-[18rem] font-sans text-sm leading-[1.375rem] tracking-[-0.5px] text-black/60 md:max-w-[20rem] md:text-base md:leading-6">
                We review every application within 24 hours. If you are a good
                fit, our team will reach out to schedule a call.
              </p>
            </div>
          ) : (
            <>
              {/* Header: step number + progress */}
              <div className="flex items-center justify-between">
                <span className="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-brand-deep to-brand-ocean font-sans text-sm text-white md:size-9 md:text-base">
                  {step + 1}
                </span>
                <span className="font-sans text-sm tracking-[-1px] text-black/60 md:text-base">
                  {step + 1}/{STEPS.length}
                </span>
              </div>

              {/* Question */}
              <p className="mt-6 font-sans text-xl leading-7 tracking-[-1px] text-black md:text-2xl md:leading-8">
                {current.question}
              </p>

              {/* Answers */}
              {current.kind === "choice" ? (
                <div className="mt-7 flex flex-col gap-3">
                  {current.options.map((option) => {
                    const selected = answers[step] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => selectOption(option)}
                        className={`flex h-11 w-[15.5rem] cursor-pointer items-center rounded-lg px-4 text-left font-sans text-base tracking-[-1px] transition-colors ${
                          selected
                            ? "bg-linear-to-br from-brand-deep to-brand-ocean text-white"
                            : "bg-surface-muted text-black hover:bg-[#dde7ec]"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-7 flex flex-col gap-4 md:gap-5">
                  <label className="block">
                    <span className="font-sans text-sm text-black md:text-base">Name*</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Martin Nikolov"
                      className="mt-1 block h-7 w-full border-b border-black/20 font-sans text-sm text-black placeholder:text-black/40 focus:border-brand-ocean focus:outline-none md:h-9 md:text-base"
                    />
                  </label>
                  <label className="block">
                    <span className="font-sans text-sm text-black md:text-base">
                      Phone number*
                    </span>
                    <span className="mt-1 flex h-9 items-center gap-2 border-b border-black/20 focus-within:border-brand-ocean">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        aria-label="Country code"
                        className="w-14 cursor-pointer appearance-auto bg-transparent font-sans text-base text-black focus:outline-none"
                      >
                        {PHONE_COUNTRIES.map(({ code, flag, dial }) => (
                          <option key={code} value={code}>
                            {flag} {dial}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(201) 555-0123"
                        aria-label="Phone number"
                        className="h-full w-full font-sans text-base text-black placeholder:text-black/40 focus:outline-none"
                      />
                    </span>
                  </label>
                  <label className="block">
                    <span className="font-sans text-sm text-black md:text-base">Email*</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="mt-1 block h-7 w-full border-b border-black/20 font-sans text-sm text-black placeholder:text-black/40 focus:border-brand-ocean focus:outline-none md:h-9 md:text-base"
                    />
                  </label>
                </div>
              )}

              {/* Footer: back + next */}
              <div className="mt-auto flex items-center justify-end gap-6">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className={`font-sans text-base tracking-[-1px] text-black transition-opacity md:text-lg ${
                    step === 0
                      ? "cursor-default opacity-20"
                      : "cursor-pointer opacity-60 hover:text-brand-ocean hover:opacity-100"
                  }`}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue}
                  className={`flex h-[2.375rem] w-[7.25rem] items-center justify-between rounded-lg bg-linear-to-br from-brand-deep to-brand-ocean pl-4 pr-1 transition-[opacity,background-image,background-color] duration-200 enabled:hover:bg-none enabled:hover:bg-brand-ocean md:h-12 md:w-[9rem] md:pl-5 md:pr-1.5 ${
                    canContinue ? "cursor-pointer" : "cursor-default opacity-50"
                  }`}
                >
                  <span className="font-sans text-base tracking-[-1px] text-white md:text-lg">
                    {isLast ? "Submit" : "Next"}
                  </span>
                  <span className="flex size-[1.875rem] items-center justify-center rounded-lg bg-white md:size-9">
                    <ArrowRightIcon />
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
