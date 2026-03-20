import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom home building, renovations, home transformations, and investor partnerships — explore all services from Luxe Homes Royale.",
};

const services = [
  {
    title: "Custom Home Building",
    href: "/services/custom-home-building",
    desc: "Ground up homes built with thoughtful planning, premium craftsmanship, and clear project management.",
  },
  {
    title: "Renovations",
    href: "/services/renovations",
    desc: "Kitchen, bath, interior, and whole home renovations designed to improve daily living and long term value.",
  },
  {
    title: "Home Transformations",
    href: "/services/home-transformations",
    desc: "High impact transformations that rework layout, style, and function to completely refresh a property.",
  },
  {
    title: "Invest With Us",
    href: "/services/invest-with-us",
    desc: "Partner with Luxe Homes Royale on value driven real estate projects and explore returns through house flipping and strategic improvements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Services
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            What we do
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Luxe Homes Royale offers residential construction and renovation services
            built around quality, communication, and strong final results.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-white/70">{service.desc}</p>
              <p className="mt-5 text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300">
                Learn more
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
