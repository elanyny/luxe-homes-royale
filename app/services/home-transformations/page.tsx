import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Transformations",
  description:
    "High-impact home transformations that completely refresh a property — interior, exterior, layout, and finishes by Luxe Homes Royale.",
};

export default function HomeTransformationsPage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Service
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            Home Transformations
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Home transformations focus on making a property feel completely new.
            This can involve major cosmetic changes, layout improvements, finish
            upgrades, and strategic updates that dramatically change the look and
            value of a home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
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

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">How we think about transformations</h2>
          <p className="mt-4 text-white/70">
            The strongest transformations are not random upgrades. They come from
            a clear vision, careful prioritization, and disciplined execution.
            We focus on changes that make the biggest visual and financial impact.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Start your transformation
          </Link>
        </div>
      </section>
    </main>
  );
}
