import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovations",
  description:
    "Kitchen, bath, interior, and whole home renovations on Long Island. Luxe Homes Royale delivers quality finishes and long-term value.",
};

export default function RenovationsPage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Service
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            Renovations
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Renovations are about more than updating a space. They are about improving
            function, elevating finish quality, and increasing the value and comfort
            of the home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Renovation services</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>Kitchen renovations</li>
              <li>Bathroom renovations</li>
              <li>Interior upgrades</li>
              <li>Whole home remodels</li>
              <li>Material and finish improvements</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">What clients gain</h2>
            <p className="mt-4 text-white/70">
              A strong renovation can improve layout, modernize the home, create a
              better living experience, and support stronger resale value in the
              future.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Renovation philosophy</h2>
          <p className="mt-4 text-white/70">
            We approach renovations with the same discipline as new construction.
            That means planning carefully, executing cleanly, and making sure the
            finished result feels polished, cohesive, and worth the investment.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Discuss your renovation
          </Link>
        </div>
      </section>
    </main>
  );
}
