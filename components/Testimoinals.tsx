import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Testimoinals = () => {
  return (
    <div className='flex justify-center flex-col gap-10'>
    <div className='flex flex-col justify-center gap-8'>
      <h1 className='font-bold text-xl md:text-3xl self-center'>My Client&apos;s Stories</h1>
      <p className=' self-center text-center px-2'>Empowering people in new a digital journey with my super services</p>
    </div>
    <div className='flex flex-row justify-center gap-5 px-2'>
    
    <div className='flex flex-col justify-center py-10 px-5 bg-bg_primary3 w-fit gap-5 rounded-sm relative'>
      <h2 className='absolute top-[-40px] left-5 text-[5rem]'>&quot;</h2>
     <Image
     src={"/review2.jpg"}
     height={1000}
     width={1000}
     alt='img'
     className='self-center rounded-full h-[120px] w-[120px] object-cover'
     />

     <p className='flex flex-wrap max-w-[300px]'>Ishtiaq Ahmed built an exceptional website for Landaury, exceeding my expectations with their expertise, creativity, and attention to detail. I highly recommend them for any web development project</p>
      <div>
     <h1 className='font-extrabold'>By Mr.Muri</h1>
     <Link className='text-bg_primarylight hover:text-bg_primary' href="https://www.mylaundrythai.com" >Company: mylaundrythai </Link>
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default Testimoinals
