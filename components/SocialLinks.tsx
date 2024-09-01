import React from 'react'
import { FaGithub } from "react-icons/fa";


import Link from 'next/link';


const SocialLinks = () => {


  return (
    <div className='flex flex-row w-fit gap-3'>
      <Link href={"https://github.com/Ishtiaq-Ahmed101"}>
      <FaGithub className='fill-bg_primarylight text-[2.5rem] hover:fill-bg_primary '/>
      </Link>
    </div>
  )
}

export default SocialLinks
