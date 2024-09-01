"use client"
import React from 'react'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion'


const Introduction = () => {
  return (
    <motion.div
    initial={{
        opacity:0,
        
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
      duration: 0.5,
      ease: easeInOut
      
    }}
    
    
    style={{backgroundImage:"url('/Minimal.svg')", backgroundSize:"100% 50% "}} id='intro'  className=' flex flex-row justify-center bg-bg_primary3 rounded-md p-2  py-[8rem] mb-[2rem]  md:px-[10%] px-8 bg-no-repeat bg-center '>
    <div className='flex flex-col justify-center'>
      <div className='flex flex-row gap-[6rem] flex-wrap-reverse justify-center'>
        <div className='flex flex-row justify-center'>
          <div className='flex flex-col justify-center gap-5'>
            <h1 className=' text-xl md:text-3xl font-bold self-center'>About Me</h1>
            <p className='md:w-[400px] text-center'>Hello, I&apos;m Ishtiaq Ahmed, an experienced Frontend Engineer passionate about creating exceptional user interfaces. I specialize in React, React-Native, and Next.js, focusing on engineering high-quality frontend solutions to enhance user experiences. Welcome to my personal portfolio!</p>
            <a href='/cv/ishtiaqCV.pdf' className='bg-bg_background border border-bg_primary4 w-fit px-4 py-5 self-center rounded-full transition-all hover:bg-bg_primary4 hover:-translate-y-2 hover:shadow-md hover:shadow-bg_white' > Dwonload CV</a>
          </div>
          </div>
          <div className='p-1 border-2 border-bg_primary rounded-full'>
          <Image src={"/me.jpg"}
          width={1000}
          height={1000}
          alt='Me'
          className='object-contain  md:w-[400px] w-[350px] mix-blend-luminosity rounded-full m-1'
          />
          </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Introduction
