"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (projectsRef.current && !projectsRef.current.contains(target)) {
        setProjectsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProjectsOpen(false);
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
    <header className="sticky top-0 z-50 overflow-hidden border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex h-20 items-center sm:h-24">
          {isHome ? (
            <button
              type="button"
              onClick={() => setLogoOpen(true)}
              className="relative inline-flex h-28 w-44 shrink-0 cursor-pointer sm:h-32 md:w-[32rem]"
              aria-label="View full logo"
            >
              <Image
                src="/project-images/NewLuxeLogo.png"
                alt="Luxe Homes Royale logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 176px, 512px"
                priority
              />
            </button>
          ) : (
            <Link href="/" className="relative inline-flex h-28 w-44 shrink-0 sm:h-32 md:w-[32rem]">
              <Image
                src="/project-images/NewLuxeLogo.png"
                alt="Luxe Homes Royale — go to homepage"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 384px, 448px"
                priority
              />
            </Link>
          )}

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm md:flex">
            <div className="relative" ref={projectsRef}>
              <button
                type="button"
                onClick={() => {
                  setProjectsOpen(!projectsOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:rounded"
                aria-expanded={projectsOpen}
              >
                Projects
                <ChevronDown className={`h-4 w-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
              </button>

              {projectsOpen && (
                <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-md">
                  <Link
                    href="/projects"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setProjectsOpen(false)}
                  >
                    All Projects
                  </Link>
                  <Link
                    href="/projects/328-concord"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setProjectsOpen(false)}
                  >
                    328 Concord Ave
                  </Link>
                  <Link
                    href="/projects/3811-illona"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setProjectsOpen(false)}
                  >
                    3811 Illona Lane
                  </Link>
                  <Link
                    href="/projects/3446-frederick"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setProjectsOpen(false)}
                  >
                    3446 Frederick St
                  </Link>
                  <Link
                    href="/projects/487-links"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setProjectsOpen(false)}
                  >
                    487 Links Dr E
                    <span className="ml-2 inline-flex rounded-md bg-cyan-400/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-400">
                      In Progress
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setProjectsOpen(false);
                }}
                className="flex items-center gap-1 text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:rounded"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-md">
                  <Link
                    href="/services/custom-home-building"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setServicesOpen(false)}
                  >
                    Custom Home Building
                  </Link>
                  <Link
                    href="/services/renovations"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setServicesOpen(false)}
                  >
                    Renovations
                  </Link>
                  <Link
                    href="/services/home-transformations"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setServicesOpen(false)}
                  >
                    Home Transformations
                  </Link>
                  <Link
                    href="/services/invest-with-us"
                    className="block rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setServicesOpen(false)}
                  >
                    Invest With Us
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-white/80 transition hover:text-white">
              About
            </Link>

            <Link href="/contact" className="text-white/80 transition hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-3 md:w-[32rem]">
            <Link
              href="/contact"
              className="hidden rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300 sm:inline-block"
            >
              Request Quote
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black/95 backdrop-blur-md sm:top-24 md:hidden">
          <nav className="mx-auto max-w-6xl px-5 py-6">
            <div className="flex flex-col gap-1">
              <p className="px-4 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                Projects
              </p>
              <Link href="/projects" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                All Projects
              </Link>
              <Link href="/projects/328-concord" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                328 Concord Ave
              </Link>
              <Link href="/projects/3811-illona" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                3811 Illona Lane
              </Link>
              <Link href="/projects/3446-frederick" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                3446 Frederick St
              </Link>
              <Link href="/projects/487-links" onClick={closeMobile} className="flex items-center gap-2 rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                487 Links Dr E
                <span className="inline-flex rounded-md bg-cyan-400/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-400">
                  In Progress
                </span>
              </Link>

              <div className="my-3 border-t border-white/10" />

              <p className="px-4 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                Services
              </p>
              <Link href="/services/custom-home-building" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                Custom Home Building
              </Link>
              <Link href="/services/renovations" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                Renovations
              </Link>
              <Link href="/services/home-transformations" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                Home Transformations
              </Link>
              <Link href="/services/invest-with-us" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                Invest With Us
              </Link>

              <div className="my-3 border-t border-white/10" />

              <Link href="/about" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                About
              </Link>
              <Link href="/contact" onClick={closeMobile} className="rounded-xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}

    </header>

      {/* Logo lightbox */}
      {logoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLogoOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setLogoOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close logo view"
        >
          <div className="relative h-[60vh] w-[85vw] max-w-2xl">
            <Image
              src="/project-images/NewLuxeLogo.png"
              alt="Luxe Homes Royale logo"
              fill
              className="object-contain"
              sizes="85vw"
            />
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLogoOpen(false); }}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
