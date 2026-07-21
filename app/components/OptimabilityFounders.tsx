import Image, { type StaticImageData } from "next/image";
import martinPhoto from "../images/martin nikolov.png";
import ioanPhoto from "../images/Ioan Popov.png";

const FOUNDERS: {
  name: string;
  role: string;
  photo: StaticImageData;
  bio: string;
}[] = [
  {
    name: "Martin Nikolov",
    role: "CEO",
    photo: martinPhoto,
    bio: "From breaking powerlifting records to completing Ironmans, running 100 miles, and climbing the elevation of Everest, I've built my life around testing the limits of human potential and now help founders do the same through Optimability.",
  },
  {
    name: "Ioan Popov",
    role: "COO",
    photo: ioanPhoto,
    bio: "Born with clubfoot and immobile until age five, I spent 18 years in active physiotherapy engineering my body beyond function. I'm now a competitive triathlete, bodybuilder, cyclist, and more. My transformation became Optimability.",
  },
];

export default function OptimabilityFounders() {
  return (
    <section
      id="founders"
      className="w-full px-4 pt-20 md:pt-32 lg:pt-44"
      aria-label="Optimability founders"
    >
      <div className="mx-auto w-full max-w-[82.5rem]">
        <h2 className="text-center font-jakarta text-[2rem] font-normal capitalize leading-[2.5rem] tracking-[-1px] text-black md:text-[2.5rem] md:leading-[3rem] md:tracking-[-1.5px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-2px]">
          Meet The Founders
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map(({ name, role, photo, bio }) => (
            <article key={name} className="rounded-lg bg-surface-muted p-5">
              <div className="relative h-[22rem] w-full overflow-hidden rounded-lg">
                <Image
                  src={photo}
                  alt={`${name}, ${role} of Optimability`}
                  fill
                  sizes="384px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-sans text-base leading-[1.375rem] tracking-[-1px] text-black">
                {name}
              </p>
              <p className="mt-1 font-sans text-sm leading-[1.375rem] tracking-[-0.5px] text-black/60">
                {role}
              </p>
              <p className="mt-2 font-sans text-base leading-[1.5rem] tracking-[-1px] text-black/80">
                {bio}
              </p>
            </article>
          ))}

          {/* Mission card */}
          <article className="hero-gradient flex min-h-[28rem] flex-col justify-between rounded-lg p-6 sm:col-span-2 lg:col-span-1">
            <p className="font-sans text-base text-white/90">Our mission</p>
            <p className="font-jakarta text-3xl font-medium leading-[2.5rem] tracking-[-1px] text-white sm:text-4xl sm:leading-[3rem]">
              On A Mission To Shape The Future Of Human Performance
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
