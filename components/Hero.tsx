import React from 'react'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

const Hero = () => {
  return (
    
    <div style={{backgroundImage:"url('/Abstract.svg')"}} className='w-full h-fit min-h-[600px] py-3 flex flex-col justify-around bg-no-repeat bg-cover bg-bottom md:px-[10%] px-8'>
    <div className='flex flex-row justify-center '>
      <div className='flex flex-col text-center'>
      <h1 className='text-xl md:text-3xl tracking-[.2rem]'>Hey there!</h1>
      <h1  style={{ WebkitBackgroundClip: "text",}} className=' text-[3rem] md:text-[6rem] font-bold bg-gradient-to-tr from-bg_primary to-bg_white inline-block text-transparent bg-clip-text '>I&lsquo;m Ishtiaq Ahmed</h1>
      <h1 className='text-xl md:text-3xl'>Frontend-Developer </h1>
      <div className='self-center mt-3'>
      <SocialLinks/>
      </div>
      </div>
    </div>

    <div className='flex flex-row justify-center '>
      <div className='flex flex-row justify-around gap-5 md:gap-8 flex-1 flex-wrap'>
        <div className='flex flex-row pt-5 md:pt-10 gap-2'>
            <h1 className='text-[2rem] md:text-[3.5rem] flex flex-col justify-center font-semibold'>2+</h1>
            <h1 className='text-md md:text-xl flex flex-col justify-center  '>Years of <span className='block'>Experience</span></h1>
        </div>
        <div className='flex flex-row pt-5 md:pt-10 gap-2'>
            <h1 className='text-[2rem] md:text-[3.5rem] flex flex-col justify-center font-semibold'>200+</h1>
            <h1 className='text-md md:text-xl flex flex-col justify-center '>Bugs<span className='block'>Squashed</span></h1>
        </div>
        <div className='flex flex-row pt-5 md:pt-10 gap-2'>
            <h1 className='text-[2rem] md:text-[3.5rem] flex flex-col justify-center font-semibold'>20+</h1>
            <h1 className='text-md md:text-xl flex flex-col justify-center'>Per week <span className='block'>Coding</span></h1>
        </div>
        <div className='flex flex-row pt-5 md:pt-10 gap-2'>
            <h1 className='text-[2rem] md:text-[3.5rem] flex flex-col justify-center font-semibold'>3+</h1>
            <h1 className='text-md md:text-xl flex flex-col justify-center'>Programing <span className='block'>Languages</span></h1>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Hero
