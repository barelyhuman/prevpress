import Page from 'prevpress/page'

export default function App ({ headProps, pageProps }) {
  return (
    <html>
      <head {...headProps} />
      <body>
        <Page {...pageProps} />
      </body>
    </html>
  )
}
