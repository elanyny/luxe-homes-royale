const pillars = [
  {
    title: "Thoughtful Planning",
    text: "Each project starts with a clear understanding of the vision, scope, and build path before construction begins.",
  },
  {
    title: "Clean Execution",
    text: "We focus on craftsmanship, coordination, and details that hold up in the finished product.",
  },
  {
    title: "Transformational Results",
    text: "From renovations to full structural expansions, our work is centered on meaningful upgrades that reshape how a home looks and functions.",
  },
];

export default function AboutPage() {
  return (
    <main className="pb-16">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            About
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            Residential construction with a focus on transformation
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Luxe Homes Royale delivers residential renovations, custom builds, and
            full home transformations across Long Island. Our work is centered on
            clean execution, thoughtful design direction, and finished results that
            feel cohesive and elevated.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Homes built and reworked with purpose
          </h2>
          <div className="mt-6 space-y-5 text-white/72">
            <p>
              We approach each project with a practical understanding of what it
              takes to move a home from dated or underbuilt to complete, refined,
              and ready to enjoy. That can mean a major renovation, a full
              transformation, or a structural expansion like a second-story
              addition.
            </p>
            <p>
              The goal is not just to renovate a house, but to improve the way it
              feels, functions, and presents as a finished home. Strong planning,
              communication, and craftsmanship are what make that possible.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            What We Value
          </p>
          <div className="mt-6 space-y-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
