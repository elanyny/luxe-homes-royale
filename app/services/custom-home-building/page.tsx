import Link from "next/link";

const accent = "#22d3ee";

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
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
        Services
      </p>

      <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
        What we do
      </h1>

      <p className="mt-4 max-w-3xl text-white/70">
        Luxe Homes Royale offers residential construction and renovation services
        built around quality, communication, and strong final results.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-white/70">{service.desc}</p>
            <p className="mt-5 text-sm font-semibold" style={{ color: accent }}>
              Learn more
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}