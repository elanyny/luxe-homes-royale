import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invest With Us",
  description:
    "Partner with Luxe Homes Royale on value-driven residential real estate opportunities through strategic renovations and house flipping.",
};

export default function InvestWithUsPage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Service
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            Invest With Us
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Luxe Homes Royale is interested in working with investors on value driven
            residential opportunities. Through strategic renovations, property
            transformations, and house flipping, the goal is to create a stronger
            resale outcome and generate profit through improved market value.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">How investors can make money</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>Acquire properties below their full market potential</li>
              <li>Improve the property through strategic construction and renovations</li>
              <li>Increase market appeal and resale value</li>
              <li>Sell at a higher price after improvements are completed</li>
              <li>Potentially earn returns based on project performance and timing</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Why partner with Luxe Homes Royale</h2>
            <p className="mt-4 text-white/70">
              We focus on identifying improvements that create real value, not just
              cosmetic upgrades without payoff. The goal is to combine smart project
              planning with disciplined execution so that the finished property is
              positioned strongly in the market.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Important note</h2>
          <p className="mt-4 text-white/70">
            All investments involve risk, and returns are never guaranteed. The
            actual outcome depends on the property, market conditions, budget
            control, timeline, and resale environment. Any investor relationship
            should be reviewed carefully with proper legal and financial guidance.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Who this is for</h2>
          <p className="mt-4 text-white/70">
            This page is for investors, capital partners, or anyone interested in
            exploring residential value add opportunities through flips, renovations,
            and strategic project execution.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Discuss an investment opportunity
          </Link>
        </div>
      </section>
    </main>
  );
}
