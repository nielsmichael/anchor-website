import React, { useState, useEffect, useCallback } from 'react'

interface ScrollVal {
  scrollY: number
}

interface ParallaxProps {
  children: React.ReactNode
}

export const ScrollContext = React.createContext<ScrollVal>({
  scrollY: 0
})

const ParallaxScroll: React.FC<ParallaxProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const scrollHandler = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, {passive: true})
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  return (
    <ScrollContext.Provider value={{scrollY}}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ParallaxScroll
