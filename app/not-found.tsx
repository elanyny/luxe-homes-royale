import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
