import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

const accent = "#22d3ee";

const featuredProjects = [
  {
    slug: "328-concord",
    name: "328 Concord Ave",
    label: "Full Home Transformation",
    image: "/project-images/328-concord/Front.JPG",
  },
  {
    slug: "project-2",
    name: "Project Two",
    label: "Coming Soon",
    image: "/projects/project-2/01.jpg",
  },
  {
    slug: "project-3",
    name: "Project Three",
    label: "Coming Soon",
    image: "/projects/project-3/01.jpg",
  },
];

const processSteps = [
  {
    title: "Consultation",
    text: "We start by understanding your goals, budget, timeline, and style so the project begins with clarity.",
  },
  {
    title: "Planning",
    text: "We define scope, materials, sequencing, and expectations before the work moves forward.",
  },
  {
    title: "Build",
    text: "We execute with craftsmanship, communication, and attention to detail from start to finish.",
  },
];

const testimonials = [
  {
    quote:
      "Luxe Homes Royale made the process feel organized and professional from the first conversation to the final result.",
    name: "Client Name",
  },
  {
    quote:
      "The quality of the work stood out immediately. Every finish felt thoughtful, clean, and well executed.",
    name: "Client Name",
  },
  {
    quote:
      "They helped bring the vision to life while keeping the process straightforward and easy to follow.",
    name: "Client Name",
  },
];

const values = [
  {
    title: "Plan Well",
    text: "Clear scopes, smart sequencing, and strong communication create a smoother project.",
  },
  {
    title: "Build Well",
    text: "We focus on workmanship, reliability, and details that hold up over time.",
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
          className="absolute inset-0 opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(34,211,238,0.35), transparent 35%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Luxe Homes Royale
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Custom builds, renovations, and home transformations done right
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                Luxe Homes Royale delivers construction, renovation, and
                house transformation projects with craftsmanship, clear
                communication, and detail driven execution.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                From early planning through the finished result, we focus on
                a process that feels organized, transparent, and built around
                quality.
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
                  Request a Quote
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom builds",
                  "Renovations",
                  "House transformations",
                  "Detail focused execution",
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
              <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-black"
                    style={{ backgroundColor: accent }}
                  >
                    L
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                    Luxe Homes Royale
                  </h2>

                  <p className="mt-3 max-w-md text-white/70">
                    Custom builds, renovations, and home transformations with premium craftsmanship and refined execution.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {["Custom Builds", "Renovations", "Transformations"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Recent homes and transformations
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Explore a selection of recent work and get a feel for the level
              of finish, design direction, and quality behind Luxe Homes Royale.
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

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {project.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                <p className="mt-4 text-sm font-semibold" style={{ color: accent }}>
                  View Project
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A straightforward building process
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Great results come from a clear process. We keep the project moving
            with planning, communication, and execution that stays focused on
            the final outcome.
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
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-lg leading-8 text-white/85">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold" style={{ color: accent }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
            Why Luxe Homes Royale
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Plan well. Build well. Finish strong.
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            We believe strong homes and strong results come from thoughtful
            planning, skilled execution, and a finished product that feels
            refined and complete.
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
              <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Ready to start your project?
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                We would love to talk through your project, answer questions,
                and help you understand the next steps.
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
                href="tel:5551234567"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}