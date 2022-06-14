import React from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/assets/img/City-Buildings.jpg"
        className="absolute w-full h-full object-cover"
        layout="fill"
      />
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <Image
          src="/assets/favicon-anchor.ico"
          width={114 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="p-12 z-10 font-bold text-center justify-center items-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] flex-1 flex flex-col">
        <h1 className="mb-6 text-4xl xl:text-6xl">Anchor Investments</h1>
        <h2 className="mb-3 text-2xl xl:text-3xl tracking-tight">
          build your future.
        </h2>
      </div>
      <div className='flex-grow-0 pb-20 md:pb-10 transition-all duration-1000'>
        <Image src='/assets/arrow-more.svg' width={188 / 3} height={105 / 3} alt='scroll down'/>
      </div>
    </div>
  );
}

export default Masthead