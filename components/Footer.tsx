import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='py-[3rem] flex flex-row justify-center'>
        <div className='flex flex-col justify-center gap-5'>
        <Image src={'/Logo.png'}
         height={70}
         width={70}
         alt='logo'
         className='mt-3 self-center'
         />
          
          <h1>© 2024 All Rights Reserved</h1>
        </div>
      
      </div>
  )
}

export default Footer
