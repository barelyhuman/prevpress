import Page from 'prevpress/page'
import { Navbar } from './components/Navbar.jsx'
import './app.css'

export default function App({ headProps, pageProps }) {
  return (
    <html>
      <head {...headProps}>
        <title>PrevPress</title>
        {...headProps.children}
      </head>
      <body>
        <Navbar />
        <article class="mx-auto mt-10 w-full max-w-3xl prose prose-zinc">
          <Page {...pageProps} />
        </article>
      </body>
    </html>
  )
}
