import React from 'react'
import Image from 'next/image'

interface Props {
  id: string
  name: string
}

const Member: React.FC<Props> = ({ id, name }) =>
  (
    <div>
      <Image 
      	src={`/assets/team/anchor_partner_${id}.jpg`} 
	alt={name}
	width={500}
	height={500}
      />
      <div className='mt-6 text-2xl'>{name} <br /> Managing Partner</div>
    </div>
  )

export default Member
