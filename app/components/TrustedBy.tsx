import Image from "next/image";

const LOGOS = [
  { src: "/logos/cubatica.png", alt: "Cubatica" },
  { src: "/logos/tridas.png", alt: "Tridas" },
  { src: "/logos/eskay-capital.png", alt: "Eskay Capital Ltd." },
  { src: "/logos/buyerbridge.png", alt: "BuyerBridge" },
  { src: "/logos/easy-media.png", alt: "Easy Media" },
  { src: "/logos/outright-ecom.png", alt: "Outright Ecom" },
];

export default function TrustedBy() {
  // Two copies of the logo list so the -50% marquee loop is seamless
  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <section aria-label="Trusted by" className="w-full pt-12">
      <p className="text-center font-sans text-lg font-medium leading-[1.375rem] tracking-[-0.056em] text-black/60">
        Trusted by
      </p>

      <div className="relative mx-auto mt-7 w-full max-w-[82.5rem] overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee motion-reduce:animate-none">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              aria-hidden={index >= LOGOS.length || undefined}
              className="box-border flex h-[3.5rem] w-[12.5rem] shrink-0 items-center justify-center rounded-[0.5rem] bg-[#ebf1f4] px-[2rem] py-[0.75rem]"
            >
              <div className="relative h-full w-full min-h-0 min-w-0">
                <Image
                  src={logo.src}
                  alt={index < LOGOS.length ? logo.alt : ""}
                  fill
                  sizes="8.5rem"
                  className="object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent md:w-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent md:w-30"
        />
      </div>
    </section>
  );
}
