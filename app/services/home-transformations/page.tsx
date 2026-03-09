import Link from "next/link";

const accent = "#22d3ee";

export default function HomeTransformationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
        Service
      </p>

      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
        Home Transformations
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-white/75">
        Home transformations focus on making a property feel completely new.
        This can involve major cosmetic changes, layout improvements, finish
        upgrades, and strategic updates that dramatically change the look and
        value of a home.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Typical transformation work</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            <li>Interior and exterior refreshes</li>
            <li>Layout reworking</li>
            <li>Finish upgrades</li>
            <li>Curb appeal improvements</li>
            <li>Modernization for resale or long term living</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Best fit for</h2>
          <p className="mt-4 text-white/70">
            This service is ideal for properties that need a full visual and
            functional reset, especially when the goal is to create a dramatic
            before and after result.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">How we think about transformations</h2>
        <p className="mt-4 text-white/70">
          The strongest transformations are not random upgrades. They come from
          a clear vision, careful prioritization, and disciplined execution.
          We focus on changes that make the biggest visual and financial impact.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold text-black"
          style={{ backgroundColor: accent }}
        >
          Start your transformation
        </Link>
      </div>
    </main>
  );
}