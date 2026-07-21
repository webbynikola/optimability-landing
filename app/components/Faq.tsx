"use client";

import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Optimability?",
    answer:
      "Optimability installs and operates health infrastructure for founders and teams. The system turns diagnostics, training, food, supplements, recovery, and testing into one execution layer.",
  },
  {
    question: "Is this just lab testing?",
    answer:
      "No. Labs are one input. Optimability uses labs, wearables, intake, goals, training history, and adherence to build the plan and run the next week.",
  },
  {
    question: "Do I have to manage the app myself?",
    answer:
      "No. The app shows the next action, tracks execution, and keeps biology, training, food, supplements, and testing in one place. The goal is fewer decisions, not more admin.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We review fit, current bottleneck, schedule constraints, and whether Optimability is the right operating layer. If it is, we map the fastest path into onboarding.",
  },
  {
    question: "Does this replace my doctor or trainer?",
    answer:
      "No. Optimability coordinates the operating layer around your biology and output demands. Physician review and external specialists stay involved when the decision requires them.",
  },
  {
    question: "What makes this different from wearables or trackers?",
    answer:
      "Wearables and trackers collect signal. Optimability turns signal into the week: food, supplements, training, testing, and follow-through.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`size-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full px-4 py-16 md:py-20 lg:py-[6.25rem]"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex w-full max-w-[82.5rem] flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
        <h2 className="font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="flex w-full flex-col gap-6 lg:max-w-[40.5rem]">
          {FAQS.map(({ question, answer }, i) => {
            const open = openIndex === i;
            return (
              <div key={question} className="rounded-2xl bg-surface-muted">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="group flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 py-2.5 pl-6 pr-2.5 text-left"
                >
                  <span className="font-sans text-base tracking-[-0.5px] text-black">
                    {question}
                  </span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-black transition-colors duration-200 group-hover:bg-brand-ocean group-hover:text-white">
                    <ChevronIcon open={open} />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-sans text-base leading-[1.375rem] tracking-[-0.5px] text-black/70">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
