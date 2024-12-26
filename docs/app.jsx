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
        <article class="w-full mx-auto max-w-3xl mt-10 prose prose-zinc">
          <Page {...pageProps} />
        </article>
      </body>
    </html>
  )
}
