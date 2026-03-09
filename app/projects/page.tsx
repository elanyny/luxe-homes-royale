import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "328-concord",
    name: "328 Concord Ave",
    location: "Oceanside, NY 11572",
    type: "Full Home Transformation",
    cover: "/project-images/328-concord/Front.JPG",
  },
  {
    slug: "project-2",
    name: "Project Two",
    location: "Coming Soon",
    type: "Coming Soon",
    cover: "/projects/project-2/01.jpg",
  },
  {
    slug: "project-3",
    name: "Project Three",
    location: "Coming Soon",
    type: "Coming Soon",
    cover: "/projects/project-3/01.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Explore recent work by Luxe Homes Royale, from full home transformations to custom interior upgrades.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={p.cover}
                alt={p.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                {p.type}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{p.name}</h2>
              <p className="mt-2 text-sm text-white/65">{p.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}