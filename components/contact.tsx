import React, { useState, useCallback} from 'react'
import Image from 'next/image'

const Contact: React.FC = () => {
  return (
    <div className="bg-anchor-black text-anchor-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex flex-col flex-1 justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image
            src="/assets/img/anchor-logo-sm.png"
            width={50}
            height={50}
            alt="Anchor Investments logo"
          />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[50%]">
          <input
            id="name"
            name="name"
            required
            maxLength={128}
            type="text"
            placeholder="Your Name"
            className="bg-anchor-black text-anchor-white outline-none border-2 border-anchor-white rounded-3xl px-8 py-2"
          />
          <input
            id="email"
            name="email"
            required
            maxLength={128}
            type="email"
            placeholder="Your Email"
            className="bg-anchor-black text-anchor-white outline-none border-2 border-anchor-white rounded-3xl px-8 py-2"
          />
          <textarea
            id="message"
            name="message"
            required
            maxLength={1048576}
            placeholder="Details regarding the nature of your inquiry"
            className="bg-anchor-black text-anchor-white outline-none border-2 border-anchor-white rounded-3xl px-8 py-2 min-h-[16em]"
          />
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-anchor-white text-anchor-black rounded-3xl px-8 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
