import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {  M_PLUS_Rounded_1c, Poppins, Roboto} from '@next/font/google'

const font = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--global-font"
})

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${font.variable} font-sans`}>
    <Component {...pageProps} />
  </div>
}
