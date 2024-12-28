import { normalize } from 'prevpress/router'

export function Navbar() {
  return (
    <header class="flex justify-between items-center p-4 border-b border-zinc-100">
      <h3 class="font-semibold uppercase">Prevpress</h3>
      <nav>
        <ul class="flex gap-2 items-center">
          <li>
            <a
              class="px-4 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900"
              href={normalize('/docs')}
            >
              Docs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
