import React, { useRef, useContext } from 'react'
import { ScrollContext } from '../utils/parallax-scroll'

interface WrapperProps {
  pageCount: number
}

interface TileCtxVal {
  pageCount: number
  currentPage: number
}

export const TileContext = React.createContext<TileCtxVal>({
  pageCount: 0,
  currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({
  // children,
  pageCount
}) => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer

  let currentPage = 0

  // Use similar process as in services.tsx to calculate scroll position
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenHeight = window.innerHeight
    const halfHeight = screenHeight / 2
    const percentY = Math.min(clientHeight + halfHeight, Math.max(-screenHeight, scrollY - offsetTop) + halfHeight) / clientHeight
    pageCount = percentY * pageCount
  }

  return (
    <TileContext.Provider value={{ pageCount, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-anchor-black text-anchor-white"
      >
        {children}
      </div>
    </TileContext.Provider>
  )
}

export const TileBackground: React.FC = ({ children }) => (
  <div className='absolute h-full w-full'>{children}</div>
)

export const TileContent: React.FC = ({ children }) => (
  <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
)