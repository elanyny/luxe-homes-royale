import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "328-concord",
    name: "328 Concord Ave",
    location: "Oceanside, NY 11572",
    fullAddress: "328 Concord Ave, Oceanside, NY 11572",
    type: "Full Home Transformation",
    cover: "/project-images/328-concord/Front.JPG",
    summary:
      "A full exterior and interior transformation with an open concept kitchen, upgraded baths, and custom feature details.",
  },
  {
    slug: "3811-illona",
    name: "3811 Illona Lane",
    location: "Oceanside, NY 11572",
    fullAddress: "3811 Illona Lane, Oceanside, NY 11572",
    type: "Full Home Transformation",
    cover: "/project-images/3811-illona/Front.jpeg",
    summary:
      "A dated colonial rebuilt into a modern statement home with a custom iron entry, marble kitchen, deck, and patio.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pb-16">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Projects
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            Signature transformations with cleaner design and stronger execution
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Each project is approached with the same priorities: thoughtful planning,
            disciplined construction, and a finished result that feels elevated,
            cohesive, and built to last.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.cover}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
                    {p.type}
                  </p>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {p.location}
                  </p>
                </div>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">{p.name}</h2>
                <p className="mt-2 text-white/65">{p.fullAddress}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  {p.summary}
                </p>
                <p className="mt-5 text-sm font-semibold text-cyan-400">
                  View Project
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
