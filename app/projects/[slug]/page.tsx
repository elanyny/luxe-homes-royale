import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGalleryViewer from "../../components/ProjectGalleryViewer";

const accent = "#22d3ee";

const projects = [
  {
    slug: "328-concord",
    name: "Oceanside Home Transformation",
    location: "Oceanside, NY 11572",
    fullAddress: "328 Concord Ave, Oceanside, NY 11572",
    type: "Full Home Transformation",
    hero: "/project-images/328-concord/Main.JPG",
    beforeImage: "/project-images/328-concord/Before.JPG",
    afterImage: "/project-images/328-concord/Front.JPG",
    gallery: [
      "/project-images/328-concord/Front.JPG",
      "/project-images/328-concord/Back.JPG",
      "/project-images/328-concord/Kitchen.JPG",
      "/project-images/328-concord/Kitchen2.JPG",
      "/project-images/328-concord/Kitchen3.JPG",
      "/project-images/328-concord/Bathroom.JPG",
      "/project-images/328-concord/Bathroom2.JPG",
      "/project-images/328-concord/Fireplace.JPG",
      "/project-images/328-concord/Stairs.JPG",
    ],
    highlights: [
      "Complete exterior transformation",
      "Open concept kitchen with waterfall island",
      "Modern bathrooms with illuminated mirrors",
      "Custom fireplace feature wall",
      "Updated staircase and refined interior finishes",
    ],
    summary:
      "This Oceanside property underwent a complete exterior and interior transformation. The project included a redesigned facade, modern open concept kitchen with waterfall island, upgraded bathrooms, a custom fireplace feature wall, and refined finishes throughout the home.",
  },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="pb-16">
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <Link href="/projects" className="text-sm text-white/60 hover:text-white">
          Back to Projects
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              {project.type}
            </p>

            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              {project.name}
            </h1>

            <p className="mt-3 text-white/65">{project.fullAddress}</p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {project.summary}
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Project Highlights</h2>

              <ul className="mt-4 space-y-3 text-white/70">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <div className="relative mx-auto aspect-[9/16] w-full max-w-md">
              <Image
                src={project.hero}
                alt={project.name}
                fill
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14">
        <h2 className="text-2xl font-semibold md:text-3xl">Before and After</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          This property was transformed from a dated residence into a much more
          polished, modern, and market ready home.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative aspect-[4/3]">
              <Image
                src={project.beforeImage}
                alt={`${project.name} before`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-white/70">Before</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative aspect-[4/3]">
              <Image
                src={project.afterImage}
                alt={`${project.name} after`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-white/70">After</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Gallery</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Click any image to open the full screen gallery viewer.
            </p>
          </div>
        </div>

        <ProjectGalleryViewer images={project.gallery} title={project.name} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Interested in a similar transformation?
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Luxe Homes Royale specializes in clean, high impact renovations and
            full home transformations that elevate both function and value.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold text-black"
            style={{ backgroundColor: accent }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}