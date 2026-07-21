import Footer from "./Footer";

/* A section body is a mix of paragraphs (string) and bullet lists (string[]) */
export type LegalSection = {
  heading?: string;
  body: (string | string[])[];
};

export default function LegalPage({
  badge,
  title,
  subtitle,
  cardTitle,
  sections,
}: {
  badge: string;
  title: string;
  subtitle: string;
  cardTitle: string;
  sections: LegalSection[];
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-navy">
      {/* Top spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[36rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(closest-side, rgba(88, 120, 255, 0.22), rgba(88, 120, 255, 0) 70%)",
        }}
      />

      <main className="relative z-10 mx-auto flex w-full max-w-[60rem] grow flex-col items-center px-4 pb-24 pt-16 md:pt-20">
        {/* Badge with decorative side lines */}
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-px w-10 bg-gradient-to-l from-[#5878ff]/60 to-transparent"
          />
          <span className="font-sans text-sm font-medium text-[#5878ff] md:text-base">
            {badge}
          </span>
          <span
            aria-hidden
            className="h-px w-10 bg-gradient-to-r from-[#5878ff]/60 to-transparent"
          />
        </div>

        <h1 className="mt-4 text-center font-jakarta text-[2.25rem] font-semibold leading-[1.15] text-white md:text-[2.75rem]">
          {title}
        </h1>

        <p className="mt-4 max-w-[28rem] text-center font-sans text-base leading-6 text-white/70">
          {subtitle}
        </p>

        {/* Document card */}
        <article className="mt-12 w-full max-w-[45rem] rounded-2xl border border-white/8 bg-[#070b22]/80 px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:px-10">
          <h2 className="font-jakarta text-2xl font-semibold text-white">
            {cardTitle}
          </h2>

          {sections.map(({ heading, body }, s) => (
            <section key={s} className="mt-8">
              {heading && (
                <h3 className="font-sans text-sm font-semibold leading-6 text-white/90">
                  {heading}
                </h3>
              )}
              {body.map((block, b) =>
                typeof block === "string" ? (
                  <p
                    key={b}
                    className="mt-3 font-sans text-sm leading-6 text-[#8b93b8]"
                  >
                    {block}
                  </p>
                ) : (
                  <ul
                    key={b}
                    className="mt-3 flex list-disc flex-col gap-1.5 pl-5 font-sans text-sm leading-6 text-[#8b93b8]"
                  >
                    {block.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </article>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
