import React from 'react';
import Image from 'next/image';

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-12 z-10 font-bold text-center">
        <h1 className="mb-6 text-5xl xl:text-6xl">Anchor Investments</h1>
        <h2 className="mb-3 text-2xl xl:text-3xl tracking-tight">
          build your future.
        </h2>
      </div>
      Masthead
    </div>
  );
}

export default Masthead;