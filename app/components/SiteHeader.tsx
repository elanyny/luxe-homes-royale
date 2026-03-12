"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const accent = "#22d3ee";

export default function SiteHeader() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image
                src="/project-images/Luxe Homes Royale Logo.JPG"
                alt="Luxe Homes Royale logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </span>
            Luxe Homes Royale
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <div className="relative" ref={projectsRef}>
              <button
                type="button"
                onClick={() => {
                  setProjectsOpen(!projectsOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 text-white hover:text-white/70"
              >
                Projects
                <ChevronDown className="h-4 w-4" />
              </button>

              {projectsOpen && (
                <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl">
                  <Link
                    href="/projects"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setProjectsOpen(false)}
                  >
                    All Projects
                  </Link>
                  <Link
                    href="/projects/328-concord"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setProjectsOpen(false)}
                  >
                    328 Concord Ave
                  </Link>
                  <Link
                    href="/projects/3811-illona"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setProjectsOpen(false)}
                  >
                    3811 Illona Lane
                  </Link>
                  <Link
                    href="/projects/3446-frederick"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setProjectsOpen(false)}
                  >
                    3446 Frederick St
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
                className="flex items-center gap-1 text-white hover:text-white/70"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl">
                  <Link
                    href="/services"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/custom-home-building"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    Custom Home Building
                  </Link>
                  <Link
                    href="/services/renovations"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    Renovations
                  </Link>
                  <Link
                    href="/services/home-transformations"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    Home Transformations
                  </Link>
                  <Link
                    href="/services/invest-with-us"
                    className="block rounded-xl px-4 py-3 text-white/85 hover:bg-white/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    Invest With Us
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-white/70">
              About
            </Link>

            <Link href="/contact" className="hover:text-white/70">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-black"
            style={{ backgroundColor: accent }}
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
