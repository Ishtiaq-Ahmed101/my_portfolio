'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'


const Carousel = () => {
  return (
    <div className='flex flex-row justify-center'>
      <div className='flex flex-col justify-center py-10 px-5 bg-bg_primary3 w-fit gap-5 rounded-sm relative'>
        <h2 className='absolute top-[-40px] left-5 text-[5rem]'>&quot;</h2>
       <Image
       src={"/me2.jpg"}
       height={1000}
       width={1000}
       alt='img'
       className='self-center rounded-full h-[120px] w-[120px] bg-center '
       />

       <p className='flex flex-wrap max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur pariatur dolore id hic aliquid eaque nobis commodi, ipsum fugiat praesentium ducimus .</p>
        <div>
       <h1 className='font-extrabold'>By Ajay Gahle</h1>
        <h1>Lorem ipsum, dolor sit </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Carousel
