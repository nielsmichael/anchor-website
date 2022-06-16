import React, { useRef, useContext } from 'react'
import { ScrollContext } from '../utils/parallax-scroll'

interface WrapperProps {
  numOfPages: number
}

interface TileContextValue {
  numOfPages: number
  currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages
}) => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  let currentPage = 0;
  const { current: elContainer } = refContainer

  // Use similar process as in services.tsx to calculate scroll position
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenHeight = window.innerHeight
    const halfHeight = screenHeight / 2
    const percentY = Math.min(clientHeight + halfHeight, Math.max(-screenHeight, scrollY - offsetTop) + halfHeight) / clientHeight
    numOfPages = percentY * numOfPages
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-anchor-black text-anchor-white"
      >
        {children}
      </div>
    </TileContext.Provider>
  );
}

export const TileBackground: React.FC = ({ children }) => (
  <div className='absolute h-full w-full'>{children}</div>
)

export const TileContent: React.FC = ({ children }) => (
  <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
)