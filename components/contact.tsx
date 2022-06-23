import React, { useState, useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

const Contact: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting:false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleOnChange = useCallback(e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: {error: false, msg: null }
    })
  }, [])

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, msg }
      })
      setInputs({
        name: "",
        email: "",
        message: "",
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setStatus(prevStatus => ({...prevStatus, submitting: true}))
    axios({
      method: "POST",
      url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
      data: inputs
    }).then(_response => {
      handleServerResponse(true, 'Thank you for your inquiry! Your message has been submitted.')
    })
  }, [inputs, handleServerResponse])

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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[50%]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="aler"
            >
              <strong className="font-bold">Error</strong>:{" "}
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div role="alert" className="text-anchor-white text-xl font-bold px-5 py-3 rounded relative">
              Your message was successfully sent. A representative will contact
              you as soon as we are able!
            </div>
          ) : (
            <>
              <input
                id="name"
                name="name"
                required
                maxLength={128}
                type="text"
                placeholder="Your Name"
                className="bg-anchor-black text-anchor-white outline-none border-2 border-anchor-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.name}
              />
              <input
                id="email"
                name="email"
                required
                maxLength={128}
                type="email"
                placeholder="Your Email"
                className="bg-anchor-black text-anchor-white outline-none border-2 border-anchor-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.email}
              />
              <textarea
                id="message"
                name="message"
                required
                maxLength={1048576}
                placeholder="Details regarding the nature of your inquiry"
                className="bg-anchor-black text-anchor-white outline-none border-2 border-anchor-white rounded-3xl px-8 py-2 min-h-[16em]"
                onChange={handleOnChange}
                value={inputs.message}
              />
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-anchor-white text-anchor-black rounded-3xl px-8 py-2"
                >
                  {!status.submitting 
                    ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                    : 'Submitting...'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      <div className="flex flex-col justify-center items-center pt-10">
        <Link href="https://goo.gl/maps/92EDSWjEGh8aE67v6" passHref={true}>
          <Image
            src="/assets/pin-drop.svg"
            width={100 / 3}
            height={100 / 3}
            alt="Maps logo"
          />
        </Link>
        <Link href="https://goo.gl/maps/92EDSWjEGh8aE67v6" passHref={true}>
          <a className="text-center">
            4445 Willard Ave, Suite 652, <br />
            Chevy Chase, MD 20815
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Contact
