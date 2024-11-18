import { normalize } from 'prevpress/router'

export function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href={normalize('/')}>Home</a>
          </li>
          <li>
            <a href={normalize('/guides')}>Guides</a>
          </li>
          <li>
            <a href={normalize('/guides/styling')}>Styling</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
