import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => (
  <footer className="min-h-full flex gap-8 items-center justify-center bg-anchor-black text-anchor-white p-20">
    <Image
      src="/assets/img/anchor-investments-banner.png"
      width={400}
      height={100}
      alt="Anchor Investments logo"
    />
    <Link href="/process">Our Process</Link>
    <Link href="/privacy">Privacy Policy</Link>
  </footer>
)

export default Footer
