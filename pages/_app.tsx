import '../styles/globals.css'
import ParallaxScroll from '../utils/parallax-scroll'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxScroll>
      <Component {...pageProps} />
    </ParallaxScroll>
  )
}

export default MyApp
