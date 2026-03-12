import Image from "next/image";
import Link from "next/link";
import { siteContact } from "../siteData";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image
                  src="/project-images/Luxe Homes Royale Logo.JPG"
                  alt="Luxe Homes Royale logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </span>
              <span className="font-semibold">Luxe Homes Royale</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Residential construction, renovations, and full home transformations
              focused on clean execution and refined finished results.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">
              Navigate
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-400">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href={siteContact.phoneHref} className="hover:text-white">
                {siteContact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                className="break-all hover:text-white"
              >
                {siteContact.email}
              </a>
              <p>Serving Long Island, NY</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} Luxe Homes Royale</p>
          <p>Built for custom homes, renovations, and major transformations.</p>
        </div>
      </div>
    </footer>
  );
}
