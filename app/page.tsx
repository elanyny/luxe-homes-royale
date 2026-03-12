import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { siteContact } from "./siteData";

const accent = "#22d3ee";

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
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(34,211,238,0.35), transparent 35%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Luxe Homes Royale
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Custom builds, renovations, and home transformations
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                Luxe Homes Royale delivers high quality residential construction,
                renovations, and full home transformations across Long Island with
                craftsmanship, clarity, and detail focused execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-black"
                  style={{ backgroundColor: accent }}
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Request Quote
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom home building",
                  "Renovations",
                  "Home transformations",
                  "Serving Long Island, NY",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0"
                      style={{ color: accent }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="pointer-events-none absolute inset-0 scale-95 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_60%)] blur-3xl" />
                <div className="relative aspect-[1.15/1] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-2 py-6 shadow-2xl backdrop-blur md:aspect-[1.3/1] md:px-4 md:py-8">
                  <Image
                    src="/project-images/Luxe Homes Royale Logo.JPG"
                    alt="Luxe Homes Royale logo"
                    fill
                    className="scale-[1.08] object-contain md:scale-[1.16]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p
              className="text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Recent homes and transformations
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Explore recent work and see the quality, design direction, and level
              of finish behind Luxe Homes Royale.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-semibold md:inline-block"
            style={{ color: accent }}
          >
            View all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p
                    className="text-xs uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {project.label}
                  </p>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Oceanside, NY
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-white/65">{project.address}</p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {project.description}
                </p>
                <p className="mt-5 text-sm font-semibold" style={{ color: accent }}>
                  View Project
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A straightforward building process
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Great results come from a clear process. We keep projects moving with
            planning, communication, and execution focused on the final outcome.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-black"
                  style={{ backgroundColor: accent }}
                >
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

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            Why Luxe Homes Royale
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Plan well. Build well. Finish strong.
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            We believe strong homes and strong results come from thoughtful planning,
            skilled execution, and a finished product that feels refined and complete.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6"
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

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.5fr_auto] md:items-center">
            <div>
              <p
                className="text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Ready to start your project?
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                We would love to talk through your project, answer questions, and
                help you understand the next steps.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-black"
                style={{ backgroundColor: accent }}
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={siteContact.phoneHref}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                {siteContact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
