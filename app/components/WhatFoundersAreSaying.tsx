"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import spencerPhoto from "../images/image 5.png";
import samPhoto from "../images/image 6.png";
import louisPhoto from "../images/Louis Garoz testimonial.png";
import johnnyPhoto from "../images/Johnny Mau testimonial.png";
import nathanPhoto from "../images/Nathan Nazareth testimonial.png";
import williamPhoto from "../images/Wiliam Philips testimonial.png";
import guyPhoto from "../images/Guy Gregory testimonial.png";
import braedenPhoto from "../images/Braeden Barkmeier testimonial.png";

const ITEMS: {
  name: string;
  role: string;
  quote: string;
  photo: StaticImageData;
}[] = [
  {
    name: "Spencer Pawliw",
    role: "8 Figure Agency Founder",
    quote:
      "\u201CIt is a hack, having someone come in and do all this for you. I am saving so much time\u201D",
    photo: spencerPhoto,
  },
  {
    name: "Sam Zia",
    role: "Serial Entrepreneur",
    quote:
      "\u201CIt is so different when you have fuel in your system and you're taken care of. This service is a no brainer.\u201D",
    photo: samPhoto,
  },
  {
    name: "Louis Garoz",
    role: "Founder, Deal Maker",
    quote:
      "\u201CI am the strongest I have ever been and in the best shape of my entire life and it is all taken care of for me.\u201D",
    photo: louisPhoto,
  },
  {
    name: "Johnny Mau",
    role: "Founder, Sales Syndicate",
    quote:
      "\u201CThis is number one by far. Best service delivery I have ever gotten, and I have spent more than $100K on stuff like this.\u201D",
    photo: johnnyPhoto,
  },
  {
    name: "Nathan Nazareth",
    role: "8 Figure Serial Entrepreneur",
    quote:
      "\u201CWhen you have your health dialed in, progress is inevitable. I feel flow state all the time.\u201D",
    photo: nathanPhoto,
  },
  {
    name: "William Phillips",
    role: "Founder, Maverick Oil",
    quote:
      "\u201CI feel better than I have ever felt in my life. It is just unbelievable. I did not know life could be this good.\u201D",
    photo: williamPhoto,
  },
  {
    name: "Guy Gregory",
    role: "Founder, GB Defenders",
    quote:
      "\u201CGood sleep, good food, hydration, working out. It is these little things that are physically alleviating stress.\u201D",
    photo: guyPhoto,
  },
  {
    name: "Braeden Barkmeier",
    role: "Internet Money Founder",
    quote:
      "\u201CSo much natural dopamine, and more vital and shredded than ever.\u201D",
    photo: braedenPhoto,
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`size-5 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowButtons({
  index,
  maxIndex,
  setIndex,
}: {
  index: number;
  maxIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        aria-label="Previous testimonials"
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        disabled={index === 0}
        className="flex size-12 cursor-pointer items-center justify-center rounded-lg bg-surface-muted text-black transition-[opacity,background-color,color] duration-200 enabled:hover:bg-brand-ocean enabled:hover:text-white disabled:cursor-default disabled:opacity-45"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        aria-label="Next testimonials"
        onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
        disabled={index === maxIndex}
        className="flex size-12 cursor-pointer items-center justify-center rounded-lg bg-surface-muted text-black transition-[opacity,background-color,color] duration-200 enabled:hover:bg-brand-ocean enabled:hover:text-white disabled:cursor-default disabled:opacity-45"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

export default function WhatFoundersAreSaying() {
  const [index, setIndex] = useState(0);
  // Two cards fit only once the 82.5rem container holds two 40.5rem cards
  // (viewport ≥ 1352px) — below that one card per step, max index follows suit
  const [perView, setPerView] = useState(2);
  const maxIndex = ITEMS.length - perView;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1352px)");
    const update = () => {
      const visible = mq.matches ? 2 : 1;
      setPerView(visible);
      setIndex((i) => Math.min(i, ITEMS.length - visible));
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="founders-saying"
      className="w-full overflow-hidden px-4 pt-20 md:pt-28 lg:pt-40"
      aria-label="What founders are saying"
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        {/* Heading — arrows sit beside it on desktop, below the cards on mobile */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
            What Founders
            <br />
            Are Saying
          </h2>

          <div className="hidden lg:block">
            <ArrowButtons index={index} maxIndex={maxIndex} setIndex={setIndex} />
          </div>
        </div>

        {/* Cards track — third card intentionally overflows to the right.
            Below lg cards are full-width so the step is 100% + gap; from lg
            cards are fixed 40.5rem, so the step is a fixed 42rem (card + gap) */}
        <div
          className="mt-12 flex gap-6 transition-transform duration-500 ease-out [--step:calc(100%+1.5rem)] lg:[--step:42rem]"
          style={{ transform: `translateX(calc(${index} * -1 * var(--step)))` }}
        >
          {ITEMS.map(({ name, role, quote, photo }, i) => (
            <article
              key={`${name}-${i}`}
              className="flex w-full max-w-full shrink-0 flex-col gap-6 rounded-lg bg-surface-muted p-5 sm:flex-row lg:h-[27.125rem] lg:w-[40.5rem]"
            >
              {/* Photo */}
              <div className="relative h-[24.625rem] w-full shrink-0 overflow-hidden rounded-lg sm:w-[18.25rem]">
                <Image
                  src={photo}
                  alt={`${name}, ${role}`}
                  fill
                  sizes="292px"
                  className="object-cover"
                />
              </div>

              {/* Quote + author */}
              <div className="flex min-w-0 flex-1 flex-col pt-2 sm:pt-8 lg:pt-0">
                <blockquote className="font-jakarta text-2xl font-normal leading-9 tracking-[-1px] text-black">
                  {quote}
                </blockquote>
                <footer className="mt-auto pt-6">
                  <p className="font-sans text-base leading-[1.375rem] tracking-[-1px] text-black">
                    {name}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-[1.375rem] tracking-[-0.5px] text-black/60">
                    {role}
                  </p>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* Arrows below the cards, left-aligned — mobile & tablet */}
        <div className="mt-8 flex justify-start lg:hidden">
          <ArrowButtons index={index} maxIndex={maxIndex} setIndex={setIndex} />
        </div>
      </div>
    </section>
  );
}
