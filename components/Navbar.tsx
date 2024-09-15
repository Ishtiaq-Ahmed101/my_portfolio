"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
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
        <div className=' sm:hidden flex text-4xl self-center'>
        {isClicked ?
             <div><FiX className='cursor-pointer' onClick={()=>{setIsClicked(false)}}/></div>:
              <div> <FiAlignRight className='cursor-pointer' onClick={()=>{
                setIsClicked(true)
              }}/></div>
              }
        </div>
      
         <div className='sm:flex flex-col justify-center gap-5 hidden '>
          <div className=' text-sm md:text-normal flex flex-row gap-5'>
         
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#intro'} > Intro</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#Skills'}> My Skills</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#myWorks'}> My Works</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#contact'}> Contact</Link>

          </div>
         </div>
         
      </nav>
      {isClicked && 
        <div className='bg-bg_primary3 absolute right-5 flex flex-col gap-4 justify-between py-2 px-6 rounded-md  '>
            <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#intro'} > Intro</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#Skills'}> My Skills</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#myWorks'}> My Works</Link>
          <Link className='hover:text-bg_primary4 transition-all hover:-translate-y-[2px] hover:transform hover:scale-105 ' href={'#contact'}> Contact</Link>
        </div>
    }
      
      </div>
  )
}

export default Navbar
function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

