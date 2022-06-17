import React from 'react'
import Link from 'next/link'

export const ProjectContainer: React.FC = ({children}) => (
  <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>{children}</div>
)

export const ProjectBackground: React.FC = () => (
  <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky'>
    <div className='bg-anchor-black h-[32vh] lg:h-auto'></div>
    <div className='bg-anchor-white h-[68vh] lg:min-h-screen'></div>
  </div>
)
