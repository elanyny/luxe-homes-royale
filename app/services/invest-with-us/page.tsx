import Link from "next/link";

const accent = "#22d3ee";

export default function InvestWithUsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
        Service
      </p>

      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
        Invest With Us
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-white/75">
        Luxe Homes Royale is interested in working with investors on value driven
        residential opportunities. Through strategic renovations, property
        transformations, and house flipping, the goal is to create a stronger
        resale outcome and generate profit through improved market value.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
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

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Important note</h2>
        <p className="mt-4 text-white/70">
          All investments involve risk, and returns are never guaranteed. The
          actual outcome depends on the property, market conditions, budget
          control, timeline, and resale environment. Any investor relationship
          should be reviewed carefully with proper legal and financial guidance.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Who this is for</h2>
        <p className="mt-4 text-white/70">
          This page is for investors, capital partners, or anyone interested in
          exploring residential value add opportunities through flips, renovations,
          and strategic project execution.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold text-black"
          style={{ backgroundColor: accent }}
        >
          Discuss an investment opportunity
        </Link>
      </div>
    </main>
  );
}