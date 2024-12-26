import { normalize } from 'prevpress/router'

export function Navbar() {
  return (
    <header class="border-b border-zinc-100 flex justify-between items-center p-4">
      <h3 class="font-semibold uppercase">Prevpress</h3>
      <nav>
        <ul class="flex items-center gap-2">
          <li>
            <a
              class="hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm"
              href={normalize('/')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              class="hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm"
              href={normalize('/about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              class="hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm"
              href={normalize('/guides')}
            >
              Guides
            </a>
          </li>
          <li>
            <a
              class="hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 rounded-md px-4 py-2 text-sm"
              href={normalize('/guides/styling')}
            >
              Styling
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
