import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Masthead from '../components/masthead'
import AboutAnchor from '../components/aboutanchor'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anchor Investments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <Masthead />
      <AboutAnchor />
    </div>
  )
}

export default Home
