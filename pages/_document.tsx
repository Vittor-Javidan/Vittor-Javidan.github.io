import { GoogleFonts } from '@/components/fonts/googleFont'
import { BoxiconIcons } from '@/components/icons/boxiconIcon'
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
