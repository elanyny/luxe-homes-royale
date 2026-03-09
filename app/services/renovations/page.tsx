import Link from "next/link";

const accent = "#22d3ee";

export default function RenovationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
        Service
      </p>

      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
        Renovations
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-white/75">
        Renovations are about more than updating a space. They are about improving
        function, elevating finish quality, and increasing the value and comfort
        of the home.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
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

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Renovation philosophy</h2>
        <p className="mt-4 text-white/70">
          We approach renovations with the same discipline as new construction.
          That means planning carefully, executing cleanly, and making sure the
          finished result feels polished, cohesive, and worth the investment.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold text-black"
          style={{ backgroundColor: accent }}
        >
          Discuss your renovation
        </Link>
      </div>
    </main>
  );
}