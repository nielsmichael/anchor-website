import React from 'react'

export const ProjectContainer: React.FC = ({children}) => (
  <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>{children}</div>
)

export const ProjectBackground: React.FC = () => (
  <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky'>
    <div className='bg-anchor-black h-[32vh] lg:h-auto'></div>
    <div className='bg-anchor-white h-[68vh] lg:min-h-screen'></div>
  </div>
)

export const ProjectLeft: React.FC<{progress: number}> = ({children, progress}) => {
  // Similar for both ProjectLeft and ProjectRight, calculate Y based on scroll progress
  let translateY = Math.max(0, 50 - progress * 3 * 50)
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[32vh] lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className='leading-10'>{children}</div>
    </div>
  )
}

export const ProjectRight: React.FC<{progress:number}> = ({ children, progress}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50)
  return (
    <div className='flex flex-1 lg:items-center justify-center h-screen'
      style={{
        transform: `translateY(${translateY})px` 
      }}>
      <div className='w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0'>
        {children}
      </div>
    </div>
  )
}