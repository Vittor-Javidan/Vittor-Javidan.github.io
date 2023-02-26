import { GoogleFonts } from '@/headComponents/fonts/googleFont'
import { BoxiconIcons } from '@/headComponents/icons/boxiconIcon'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <BoxiconIcons />
        <GoogleFonts />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
