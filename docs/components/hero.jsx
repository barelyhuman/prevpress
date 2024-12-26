export function Hero() {
  return (
    <section class="p-2 md:p-20 flex flex-col items-center justify-center gap-4 min-h-[80vh] w-full">
      <h2 class="text-2xl font-semibold">
        Minimal Static Site Engine for Preact
      </h2>
      <div class="flex items-center gap-4">
        <button class="bg-black rounded text-zinc-200  hover:text-white hover:bg-zinc-900 px-4 py-2">
          Get Started &rarr;
        </button>
      </div>
    </section>
  )
}
