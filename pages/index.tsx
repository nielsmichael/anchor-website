import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Masthead from '../components/masthead'
import AboutAnchor from '../components/aboutanchor'
import Services from '../components/services'
import PastWork from '../components/pastwork'
import Values from '../components/values'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anchor Investments</title>
        <link rel="icon" href="/assets/favicon-anchor.ico" />
        <meta
          name="description"
          content="Anchor Investments, LLC is a Real Estate Acquisition and Rental Property Management company based out of the Washington, D.C. area."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Masthead />
      <AboutAnchor />
      <Services />
      <PastWork />
      <Values />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
