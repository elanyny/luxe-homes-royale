import { Sparkles } from "lucide-react";

const accent = "#22d3ee";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${accent}, rgba(34,211,238,0.2))`,
              }}
            >
              <Sparkles className="h-4 w-4 text-black" />
            </span>
            <span className="font-semibold">Luxe Homes Royale</span>
          </div>

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Luxe Homes Royale
          </p>
        </div>
      </div>
    </footer>
  );
}