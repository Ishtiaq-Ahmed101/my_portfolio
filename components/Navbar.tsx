"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" md:px-[10%] px-8">
      <nav className='mt-3 flex flex-row justify-between'>
        <div className='flex flex-col justify-center'>
        <Image src={'/Logo.png'}
         height={70}
         width={70}
         alt='logo'
         className='mt-3'
         />
        </div>
      
         <div className='flex flex-col justify-center gap-5 '>
          <div className=' text-sm md:text-normal flex flex-row gap-5'>
         
          
          
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#intro'} > Intro</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#Skills'}> My Skills</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#myWorks'}> My Works</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#contact'}> Contact</Link>

          </div>
         </div>
         
      </nav>
      </div>
  )
}

export default Navbar
