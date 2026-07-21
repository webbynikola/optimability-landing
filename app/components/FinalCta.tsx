import Image from "next/image";
import CtaButton from "./CtaButton";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const COLUMN_ONE: Testimonial[] = [
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
      "“It is a hack, having someone come in and do all this for you. I am saving so much time”",
    name: "Spencer Pawliw",
    role: "8 Figure Agency Founder",
    avatar: "/founders/avatar-spencer-pawliw.png",
  },
];

const COLUMN_TWO: Testimonial[] = [
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
  {
    quote:
      "“Good sleep, good food, hydration, working out. It is these little things that are physically alleviating stress.”",
    name: "Guy Gregory",
    role: "Founder, GB Defenders",
    avatar: "/founders/avatar-guy-gregory.png",
  },
];

function TestimonialCard({ quote, name, role, avatar }: Testimonial) {
  return (
    <li className="flex h-[18.25rem] w-[19.5rem] shrink-0 flex-col justify-between rounded-xl bg-white/[0.07] p-5">
      <blockquote className="font-sans text-base leading-6 tracking-[-0.5px] text-white">
        {quote}
      </blockquote>
      <div className="flex items-center gap-4">
        {/* unoptimized: sources are already small; the optimizer's low-quality
            small rendition looks soft, the original downscaled by the browser doesn't */}
        <Image
          src={avatar}
          alt={name}
          width={44}
          height={44}
          unoptimized
          className="size-11 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-base leading-[1.375rem] text-white">
            {name}
          </p>
          <p className="mt-0.5 font-sans text-sm leading-[1.125rem] text-white/60">
            {role}
          </p>
        </div>
      </div>
    </li>
  );
}

/* Endless sideways scroll: two identical lists translated by -50% per loop.
   The negative delay offsets the phase; `reverse` flips the direction so the
   two rows travel opposite ways. */
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

export default function FinalCta() {
  return (
    <section
      id="qualify"
      className="hero-gradient mt-16 w-full overflow-hidden pb-16 md:mt-20 md:pb-20 lg:mt-[6.25rem]"
      aria-label="Ready to let Optimability run your health"
    >
      {/* Copy + CTA */}
      <div className="mx-auto w-full max-w-[82.5rem] px-4">
        <div className="flex max-w-[38rem] flex-col pt-16 md:pt-20">
          <h2 className="font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-white md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
            Ready To Let Optimability Run Your Health
          </h2>
          <p className="mt-4 max-w-[17rem] font-sans text-base leading-[1.375rem] tracking-[-1px] text-white/80">
            Schedule a call so we can talk through your goals and see if it is
            the right fit
          </p>
          <div className="mt-6">
            <CtaButton href="#apply" />
          </div>
        </div>
      </div>

      {/* Testimonial rows scrolling sideways in opposite directions,
          fading out toward both edges */}
      <div className="mt-12 flex w-full flex-col gap-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)] md:mt-16">
        <MarqueeRow items={COLUMN_ONE} duration="55s" delay="-8.4s" />
        <MarqueeRow items={COLUMN_TWO} duration="70s" delay="-2.7s" reverse />
      </div>
    </section>
  );
}
