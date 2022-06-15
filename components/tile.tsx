import React, { useRef, useContext } from 'react'

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

export const TileWrapper = React.FC<WrapperProps> = ({
  children,
  pageCount
}) => {
  return<div className='relative bg-anchor-black text-anchor-white'>Tile Wrapper</div>
}
