import '../styles/globals.css'
import ParallaxScroll from '../utils/parallax-scroll'
import type { AppProps } from 'next/app'
import SizeObserver from '../utils/size-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ParallaxScroll>
        <Component {...pageProps} />
      </ParallaxScroll>
    </SizeObserver>
  )
}

export default MyApp
