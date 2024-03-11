import Page from 'prevpress/page'
import { Navbar } from './components/Navbar.jsx'

export default function App ({ headProps, pageProps }) {
  return (
    <html>
      <head {...headProps} />
      <body>
        <Navbar />
        <Page {...pageProps} />
      </body>
    </html>
  )
}
