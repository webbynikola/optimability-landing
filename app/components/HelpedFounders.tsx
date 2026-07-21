import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "“It is so different when you have fuel in your system and you're taken care of. This service is a no brainer.”",
    name: "Sam Zia",
    role: "Serial Entrepreneur",
    avatar: "/founders/avatar-sam-zia.png",
  },
  {
    quote:
      "“When you have your health dialed in, progress is inevitable. I feel flow state all the time.”",
    name: "Nathan Nazareth",
    role: "8 Figure Serial Entrepreneur",
    avatar: "/founders/avatar-nathan-nazareth.png",
  },
  {
    quote:
      "“I feel better than I have ever felt in my life. It is just unbelievable. I did not know life could be this good.”",
    name: "William Phillips",
    role: "Founder, Maverick Oil",
    avatar: "/founders/avatar-william-phillips.png",
  },
  {
    quote:
      "“This is number one by far. Best service delivery I have ever gotten, and I have spent more than $100K on stuff like this.”",
    name: "Johnny Mau",
    role: "Founder, Sales Syndicate",
    avatar: "/founders/avatar-johnny-mau.png",
  },
  {
    quote:
      "“I am the strongest I have ever been and in the best shape of my entire life and it is all taken care of for me.”",
    name: "Louis Garoz",
    role: "Founder, Deal Maker",
    avatar: "/founders/avatar-louis-garoz.png",
  },
  {
    quote:
      "“So much natural dopamine, and more vital and shredded than ever.”",
    name: "Braeden Barkmeier",
    role: "Internet Money Founder",
    avatar: "/founders/avatar-braeden-barkmeier.png",
  },
];

/* Second row starts phase-shifted so the two rows don't scroll in lockstep */
const ROW_TWO = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)];

function TestimonialCard({ quote, name, role, avatar }: Testimonial) {
  return (
    <li className="flex h-[18.3125rem] w-[19.5rem] shrink-0 flex-col justify-between rounded-lg bg-surface-muted p-5">
      <blockquote className="font-sans text-xl leading-[1.625rem] tracking-[-1px] text-black/80">
        {quote}
      </blockquote>
      <div className="flex items-center gap-4">
        {/* unoptimized: sources are already small; the optimizer's 48px q75
            rendition looks soft, the original downscaled by the browser doesn't */}
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          unoptimized
          className="size-10 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-base leading-[1.375rem] tracking-[-1px] text-black">
            {name}
          </p>
          <p className="font-sans text-sm leading-[1.375rem] tracking-[-1px] text-black/60">
            {role}
          </p>
        </div>
      </div>
    </li>
  );
}

/* Endless sideways scroll: two identical lists translated by -50% per loop.
   `reverse` flips the direction so the two rows travel opposite ways. */
function MarqueeRow({
  items,
  duration,
  delay,
  reverse = false,
}: {
  items: Testimonial[];
  duration: string;
  delay: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex w-max animate-marquee motion-reduce:animate-none ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
      style={{ animationDuration: duration, animationDelay: delay }}
    >
      <ul className="flex gap-6 pr-6">
        {items.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </ul>
      <ul aria-hidden className="flex gap-6 pr-6">
        {items.map((t) => (
          <TestimonialCard key={`${t.name}-copy`} {...t} />
        ))}
      </ul>
    </div>
  );
}

export default function HelpedFounders() {
  return (
    <section
      className="w-full pt-20 md:pt-28 lg:pt-36"
      aria-label="We have helped 100+ founders in 2026"
    >
      <h2 className="mx-auto max-w-[40.5rem] px-4 text-center font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
        We have helped 100+ founders in 2026
      </h2>

      <p className="mx-auto mt-5 max-w-[24.625rem] px-4 text-center font-sans text-base leading-[1.375rem] tracking-[-1px] text-black/80 md:mt-9">
        Founders who stopped managing their health and started operating at
        their best. Here is what they have to say
      </p>

      <div className="relative mt-12 flex w-full flex-col gap-6 overflow-hidden">
        <MarqueeRow items={TESTIMONIALS} duration="60s" delay="-12s" />
        <MarqueeRow items={ROW_TWO} duration="75s" delay="-31s" reverse />

        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent"
        />
      </div>
    </section>
  );
}
