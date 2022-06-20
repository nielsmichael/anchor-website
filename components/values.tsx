import React from 'react'

const Values: React.FC = () => (
  <section className="bg-anchor-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto lg:max-w-[70%] px-11 text-center">
        <h3 className="text-4xl xs:text-xl mb-10 font-semibold">
          Anchor Investments has a "safety first" approach to managing your
          investments.
        </h3>
        <div className="text-xl">
          <p>
            Rather than merely brokering you with a real estate vessel, Anchor
            Investments takes on all your risk, pays all the bills, and manages
            your properties on your behalf.
          </p>
          <p>
            Our background in Lean and Kaizen is part of what sets us apart from
            other real estate investment funds. We operate completely digitally,
            aiming to reduce waste wherever we can.
          </p>
          <p>
            This approach helps us to streamline our rental property acquisition
            and management process, eliminating waste and maximizing returns.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Values