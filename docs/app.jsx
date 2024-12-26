import Page from 'prevpress/page'
import { Navbar } from './components/Navbar.jsx'
import './app.css'

export default function App({ headProps, pageProps }) {
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
