"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryViewerProps = {
  images: string[];
  title: string;
};

export default function ProjectGalleryViewer({
  images,
  title,
}: ProjectGalleryViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openViewer = (index: number) => {
    setActiveIndex(index);
  };

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => openViewer(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left"
          >
            <Image
              src={src}
              alt={`${title} gallery image ${index + 1}`}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95">
          <div className="absolute right-4 top-4 z-[110] flex gap-3">
            <button
              type="button"
              onClick={closeViewer}
              className="rounded-full border border-white/20 bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex h-full items-center justify-center px-6 py-16">
            <div className="relative h-full w-full max-w-6xl">
              <Image
                src={images[activeIndex]}
                alt={`${title} full screen image ${activeIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}