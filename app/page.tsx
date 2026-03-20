import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { siteContact } from "./siteData";
import FadeInSection from "./components/FadeInSection";

const featuredProjects = [
  {
    slug: "328-concord",
    name: "328 Concord Ave",
    address: "328 Concord Ave, Oceanside, NY 11572",
    label: "Full Home Transformation",
    image: "/project-images/328-concord/Front.JPG",
    description:
      "A full interior and exterior renovation with an open kitchen, upgraded bathrooms, and refined custom details.",
  },
  {
    slug: "3811-illona",
    name: "3811 Illona Lane",
    address: "3811 Illona Lane, Oceanside, NY 11572",
    label: "Full Home Transformation",
    image: "/project-images/3811-illona/Front.jpeg",
    description:
      "A dated colonial reworked into a modern home with a custom iron entry, waterfall-island kitchen, deck, and patio.",
  },
  {
    slug: "3446-frederick",
    name: "3446 Frederick St",
    address: "3446 Frederick St",
    label: "Second Story Addition",
    image: "/project-images/3446-frederick/Front.JPG",
    description:
      "A major transformation featuring the addition of a full second story and updated interior spaces throughout the home.",
  },
  {
    slug: "487-links",
    name: "487 Links Dr E",
    address: "487 Links Dr E, Oceanside, NY 11572",
    label: "In Progress",
    image: "/project-images/487-links/After.JPEG",
    description:
      "A bold contemporary transformation currently under construction — featuring modern architecture, expansive glass, and a fully redesigned exterior.",
  },
];

const processSteps = [
  {
    title: "Consultation",
    text: "We begin by understanding your vision, budget, and timeline so the project starts with clarity.",
  },
  {
    title: "Planning",
    text: "We define scope, materials, layout direction, and execution strategy before work moves forward.",
  },
  {
    title: "Build",
    text: "We execute with craftsmanship, communication, and detail focused project management from start to finish.",
  },
];

const values = [
  {
    title: "Plan Well",
    text: "Clear scopes, smart sequencing, and strong communication create a smoother project experience.",
  },
  {
    title: "Build Well",
    text: "We focus on workmanship, reliability, and quality that holds up over time.",
  },
  {
    title: "Finish Strong",
    text: "The final result should feel polished, intentional, and ready to enjoy or bring to market.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/project-images/3446-frederick/Front.JPG"
            alt="3446 Frederick St — full home transformation by Luxe Homes Royale"
            fill
            priority
            className="object-cover brightness-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.24)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_30%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="grid min-h-[72vh] gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 shadow-lg backdrop-blur-sm">
                Long Island&apos;s Premium Home Builder
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-6xl">
                Transform your home with craftsmanship that lasts
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                From custom builds to full home transformations, Luxe Homes Royale
                delivers premium residential construction across Long Island with
                clear timelines and detail-focused execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Get a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom home building",
                  "Renovations & remodels",
                  "Full home transformations",
                  "Serving Long Island, NY",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 shadow-lg backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                  Featured Transformation
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  3446 Frederick St
                </h2>
                <p className="mt-3 text-white/70">
                  A major transformation featuring a full second story addition,
                  reworked elevations, and updated interior spaces throughout.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  {["Second Story Addition", "Full Renovation", "Structural Expansion"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-white/80"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
                <Link
                  href="/projects/3446-frederick"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Explore this project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FadeInSection>
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Featured Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Recent homes and transformations
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Explore recent work and see the quality, design direction, and level
                of finish behind every Luxe Homes Royale project.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 md:inline-block"
            >
              View all projects
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-zinc-900/80"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.label}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                      {project.label}
                    </p>
                    <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Oceanside, NY
                    </p>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-white/60">{project.address}</p>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {project.description}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-400">
                    View Project <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile-only link */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              View all projects
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* Process */}
      <FadeInSection>
        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/65 p-8 backdrop-blur-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A straightforward building process
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Great results come from a clear process. We keep projects moving with
              planning, communication, and execution focused on the final outcome.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-semibold text-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Values */}
      <FadeInSection>
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-zinc-950/80 to-zinc-900/40 p-8 md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Why Luxe Homes Royale
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Plan well. Build well. Finish strong.
            </h2>
            <p className="mt-3 max-w-3xl text-white/70">
              We believe strong homes and strong results come from thoughtful planning,
              skilled execution, and a finished product that feels refined and complete.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6"
                >
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection>
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/65 p-8 backdrop-blur-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.5fr_auto] md:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                  Get In Touch
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Ready to start your project?
                </h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  Whether it is a renovation, custom build, or full transformation — we
                  would love to talk through your project and help you take the next step.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={siteContact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  {siteContact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
