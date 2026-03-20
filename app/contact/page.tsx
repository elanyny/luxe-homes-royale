import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { siteContact } from "../siteData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Luxe Homes Royale to discuss your renovation, custom build, or home transformation project on Long Island.",
};

const inputStyles =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 transition focus:border-cyan-400/40";

export default function ContactPage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">
            Start the conversation about your project
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Reach out to discuss renovations, custom builds, home transformations,
            or structural additions. We can talk through scope, direction, and what
            the next step should be.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Direct Contact
          </p>
          <div className="mt-6 space-y-5">
            <a
              href={siteContact.phoneHref}
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/25 p-5 transition hover:bg-black/35"
            >
              <PhoneCall className="mt-1 h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                  Phone
                </p>
                <p className="mt-2 text-lg font-semibold">{siteContact.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteContact.email}`}
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/25 p-5 transition hover:bg-black/35"
            >
              <Mail className="mt-1 h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                  Email
                </p>
                <p className="mt-2 text-lg font-semibold break-all">{siteContact.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-black/25 p-5">
              <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                  Service Area
                </p>
                <p className="mt-2 text-lg font-semibold">Long Island, New York</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Project Inquiry
          </p>
          <form className="mt-6 space-y-4" action={`mailto:${siteContact.email}`} method="POST" encType="text/plain">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-white/60">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm text-white/60">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className={inputStyles}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm text-white/60">
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="contact-address" className="mb-2 block text-sm text-white/60">
                Project Address
              </label>
              <input
                id="contact-address"
                name="address"
                placeholder="Address of the property"
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm text-white/60">
                Project Details
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about the project"
                className={`min-h-[180px] ${inputStyles}`}
              />
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="submit"
                className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Send Message
              </button>
              <a
                href={`mailto:${siteContact.email}`}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Email Directly
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
