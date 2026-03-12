import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "328-concord",
    name: "Oceanside Home Transformation",
    location: "328 Concord Ave, Oceanside, NY 11572",
    type: "Full Home Transformation",
    cover: "/project-images/328-concord/Front.JPG",
  },
  {
    slug: "3811-illona",
    name: "Illona Lane Home Transformation",
    location: "3811 Illona Lane, Long Island, NY",
    type: "Full Home Transformation",
    cover: "/project-images/3811-illona/Front.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        Projects
      </p>

      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
        Recent work by Luxe Homes Royale
      </h1>

      <p className="mt-4 max-w-3xl text-white/70">
        Explore recent transformations, renovations, and residential construction
        work completed by Luxe Homes Royale.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, index) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className={`relative ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
              <Image
                src={p.cover}
                alt={p.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="100vw"
              />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                {p.type}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{p.name}</h2>
              <p className="mt-2 text-white/65">{p.location}</p>
              <p className="mt-5 text-sm font-semibold text-cyan-400">
                View Project
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}