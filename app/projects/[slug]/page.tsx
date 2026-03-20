import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BeforeAfterToggle from "../../components/BeforeAfterToggle";
import ProjectGalleryViewer from "../../components/ProjectGalleryViewer";
import { projects } from "../projectData";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              {project.type}
            </p>

            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              {project.name}
            </h1>

            <p className="mt-3 text-white/60">{project.fullAddress}</p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
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
            {project.hero ? (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.hero}
                  alt={project.name}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(255,255,255,0.04))] p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Images Pending
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">{project.name}</h2>
                  <p className="mt-3 max-w-md text-white/60">
                    Add the Frederick project photos to the new image folder and this
                    section will be ready to display them.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Before and After</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          This property was transformed from a dated residence into a much more
          polished, modern, and market ready home.
        </p>

        {project.beforeImage && project.afterImage ? (
          <div className="mt-8">
            <BeforeAfterToggle
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              title={project.name}
            />
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 text-white/60">
            Before-and-after images will be added here once the Frederick project
            photo set is available.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Gallery</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Click any image to open the full screen gallery viewer.
            </p>
          </div>
        </div>

        {project.gallery.length > 0 ? (
          <ProjectGalleryViewer images={project.gallery} title={project.name} />
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 text-white/60">
            Gallery images for this project have not been added yet.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Interested in a similar transformation?
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Luxe Homes Royale specializes in clean, high impact renovations and
            full home transformations that elevate both function and value.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
