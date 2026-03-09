export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <form className="mt-8 max-w-xl space-y-4">
        <input
          placeholder="Name"
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3"
        />
        <input
          placeholder="Email"
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3"
        />
        <textarea
          placeholder="Project details"
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 min-h-[120px]"
        />
        <button
          type="button"
          className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}