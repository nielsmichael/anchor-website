import React from 'react'
import Member from './member'

const AboutAnchor: React.FC = () => {
  return (
    <section className={`flex flex-col bg-anchor-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-10">
        <p className="leading-tight max-w-4xl mx-auto text-3xl tracking-tight">
          <strong>Put your money to work.</strong>
          <br />
          We specialize in passive income generating rental property acquisition
          and management. Invest with us for year-on-year returns, get your
          money working for you, and capitalize on tax advantages where
          possible.
        </p>
      </div>
      <div className="container mx-auto px-10 mt-12 text-center">
        <h2>Our Team</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:gap-16">
          <Member id="brad" name="Brad Schmidt" />
          <Member id="charles" name="Charles Love" />
        </div>
      </div>
    </section>
  )
}

export default AboutAnchor
