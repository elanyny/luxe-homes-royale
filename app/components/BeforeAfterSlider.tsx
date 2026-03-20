"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3]">
        {/* After image fills the background (right side) */}
        <Image
          src={afterImage}
          alt={`${title} after`}
          fill
          className="object-cover"
        />

        {/* Before image clips from the left */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-full min-w-[320px]">
            <Image
              src={beforeImage}
              alt={`${title} before`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white/90"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            Drag
          </div>
        </div>

        {/* Labels — Before on left, After on right */}
        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
          After
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4">
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="w-full accent-cyan-400"
          aria-label={`Before and after comparison for ${title}`}
        />
      </div>
    </div>
  );
}
