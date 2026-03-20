"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";

type BeforeAfterToggleProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
};

export default function BeforeAfterToggle({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterToggleProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setShowAfter(!showAfter)}
        className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
        aria-label={`Toggle between before and after view of ${title}. Currently showing ${showAfter ? "after" : "before"}.`}
      >
        {/* Before image */}
        <Image
          src={beforeImage}
          alt={`${title} before transformation`}
          fill
          className={`object-cover transition-opacity duration-500 ${showAfter ? "opacity-0" : "opacity-100"}`}
        />

        {/* After image */}
        <Image
          src={afterImage}
          alt={`${title} after transformation`}
          fill
          className={`object-cover transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
        />

        {/* Label badge */}
        <div className="absolute left-4 top-4 z-10 rounded-full bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {showAfter ? "After" : "Before"}
        </div>

        {/* Toggle hint overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/20">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2.5 text-sm font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowRightLeft className="h-4 w-4 text-cyan-400" />
            <span>Click to see {showAfter ? "before" : "after"}</span>
          </div>
        </div>
      </button>

      {/* Toggle bar */}
      <div className="flex border-t border-white/10">
        <button
          type="button"
          onClick={() => setShowAfter(false)}
          className={`flex-1 px-4 py-3 text-center text-sm font-medium transition ${
            !showAfter
              ? "bg-cyan-400/10 text-cyan-400"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          Before
        </button>
        <div className="w-px bg-white/10" />
        <button
          type="button"
          onClick={() => setShowAfter(true)}
          className={`flex-1 px-4 py-3 text-center text-sm font-medium transition ${
            showAfter
              ? "bg-cyan-400/10 text-cyan-400"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          After
        </button>
      </div>
    </div>
  );
}
