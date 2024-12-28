export function Hero() {
  return (
    <section class="p-2 md:p-20 flex flex-col items-center justify-center gap-4 min-h-[80vh] w-full">
      <h2 class="text-2xl font-semibold">
        Simple Content First websites with Preact
      </h2>
      <div class="flex gap-4 items-center">
        <a
          href="/"
          class="px-4 py-2 no-underline bg-black rounded text-zinc-200 hover:text-white hover:bg-zinc-900"
        >
          Get Started &rarr;
        </a>
      </div>
    </section>
  )
}
