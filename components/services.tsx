import React, { useContext, useRef } from 'react'
import classes from '../styles/services.module.css'
import { ScrollContext } from '../utils/parallax-scroll'

const opacityBlock = (sectionScrolled: number, blockN: number) => {
  const scrolled = sectionScrolled - blockN
  if (scrolled >= 0 && scrolled < 1) return 1
  return 0.2
} 

const Services: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  // 3 "pages" to focus
  const pageCount = 3;
  // set current scroll position to start at zero
  let scroll = 0;

  const { current: elContainer } = refContainer
  if (elContainer ) {
    const { clientHeight, offsetTop } = elContainer
    const screenHeight = window.innerHeight
    const halfHeight = screenHeight / 2
    const percentY = Math.min(clientHeight + halfHeight, Math.max(-screenHeight, scrollY - offsetTop) + halfHeight) / clientHeight
    scroll = Math.min(pageCount - 0.5, Math.max(0.5, percentY * pageCount)) 
  }

  return (
    <div ref={refContainer} className="bg-anchor-black text-anchor-white">
      <div className="min-h-screen max-w-5xl mx-auto px-11 lg:px-20 py-20 md:py-24 lg:py-32 flex flex-col justify-center items-center text-3xl md:text-5xl lg:text-7xl font-semibold">
        <div className="leading-[1.15]">
          <div
            className={classes.servicesTxt}
            style={{ opacity: opacityBlock(scroll, 0) }}
          >
            Get steady income through rental payments without the hassle of
            property management.
          </div>
          <span
            className={`${classes.servicesTxt} inline-block after:content-['_']`}
            style={{ opacity: opacityBlock(scroll, 1) }}
          >
            Anchor Investments takes on all your risk and payments all your bills,
            managing the property so that you don't have to.
          </span>
          <span
            className={`${classes.servicesTxt} inline-block`}
            style={{ opacity: opacityBlock(scroll, 2) }}
          >
            We enlist top of the line property managers to
            ensure that your investments are safe. You won't need to
            deal with the mundane aspects of being a property owner while
            generating your cash flow.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Services
