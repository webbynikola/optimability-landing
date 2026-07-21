"use client";

import { useState } from "react";
import Image from "next/image";
import videoThumbnail from "../images/apply-video-thumbnail.png";

/* Hashed ID behind the share link optimability.wistia.com/s/x5ddph253slx1q2 */
const WISTIA_VIDEO_ID = "f4uoaqmkcp";

export default function ApplyHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="flex w-full flex-col items-center px-4 pb-14 pt-16 md:pb-20 md:pt-24"
      aria-label="Apply to Optimability"
    >
      {/* Badge */}
      <div className="flex min-h-9 items-center justify-center rounded-full bg-white/12 px-5 py-2 md:px-8">
        <span className="text-center font-sans text-sm capitalize leading-tight tracking-[-0.5px] text-white md:text-base md:leading-none md:tracking-[-1px]">
          For Founders Doing Multiple 6 Figures A Year
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-6 max-w-[72.5625rem] text-center font-jakarta text-[2.25rem] font-normal capitalize leading-[2.75rem] tracking-[-1px] text-white md:mt-8 md:text-[3rem] md:leading-[3.5rem] md:tracking-[-1.5px] lg:text-[3.75rem] lg:leading-[4.25rem] lg:tracking-[-2px]">
        Eliminate The Decision Fatigue That&apos;s Costing You Thousands Of
        Dollars
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-[22.125rem] text-center font-sans text-base leading-[1.375rem] tracking-[-1px] text-white/80 md:mt-8">
        A done-for-you system built for founders runs your health so you can
        keep running your business
      </p>

      {/* Video */}
      <div className="relative mt-8 aspect-video w-full max-w-[68.5rem] overflow-hidden rounded-sm md:mt-14">
        {isPlaying ? (
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${WISTIA_VIDEO_ID}?autoPlay=true`}
            title="Founder explaining how Optimability works"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="size-full border-0"
          />
        ) : (
          <>
            <Image
              src={videoThumbnail}
              alt="Founder explaining how Optimability works"
              priority
              className="size-full object-cover"
            />
            <button
              type="button"
              aria-label="Play video"
              onClick={() => setIsPlaying(true)}
              className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/40 backdrop-blur-[5px] transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-brand-ocean/60 md:size-[5.5rem]"
            >
              <svg
                viewBox="0 0 44 44"
                fill="none"
                aria-hidden="true"
                className="size-8 md:size-11"
              >
                <path
                  d="M14.668 9.42358V35.0902L34.8346 22.2569L14.668 9.42358Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
