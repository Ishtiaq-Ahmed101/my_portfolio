import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";

const RecentWorks = () => {
  return (
    <div id='myWorks'  className='md:px-[5%] px-8 bg-bg_primary3 rounded-md p-2 mb-[5rem] py-[5rem] flex flex-row justify-center flex-wrap bg-cover'>
    <div className='flex flex-col justify-center gap-8'>
    <h1 className='font-bold text-xl md:text-3xl self-center'>My Recent Projects</h1>
    <p className=' self-center text-center px-2'>Some of my projects that i have created.</p>
      <div className='flex flex-row justify-center gap-4 md:mx-[2rem] mx-4 flex-wrap '>
        
        <Link href={"https://imagecompressorpro.netlify.app/"} className='bg-bg_primary2 p-[20px] md:p-[30px] lg:p-[50px] rounded-md  self-center flex flex-row relative justify-center group '>
            <Image
            src={"/projects/compressorProject.png"}
            height={1000}
            width={1000}
            alt='works'
            className=' rounded-md  h-[300px] w-[390px] lg:h-[340px] lg:w-[420px] self-center'
            />
            <div className=' absolute bottom-14 left-auto bg-gradient-to-r from-bg_primary to-bg_primary2 hidden group-hover:flex flex-row  w-[75%]  p-3 rounded-md'>
              <div className='flex flex-col'>
              <h1 className='font-bold text-xl'>Image Compressor</h1>
              <p className='text-wrap text-sm'>Experience Lightning-Fast Image Compression Solutions And Resizing.</p>
              </div>
              <FaArrowRightLong className='font-slim -rotate-45 text-3xl self-center'/>
            </div>
        </Link>
        <Link href={"https://www.mylaundrythai.com/"} className='bg-bg_primary2 p-[20px] md:p-[30px] lg:p-[50px] rounded-md  self-center flex flex-row relative justify-center group '>
            <Image
            src={"/projects/landuaryProject.png"}
            height={1000}
            width={1000}
            alt='works'
            className=' rounded-md  h-[300px] w-[390px] lg:h-[340px] lg:w-[420px] object-cover overflow-hidden'
            />
            <div className=' absolute bottom-14 left-auto bg-gradient-to-r from-bg_primary to-bg_primary2 hidden group-hover:flex flex-row  w-[75%]  p-3 rounded-md'>
              <div className='flex flex-col'>
              <h1 className='font-bold text-xl'>Laundary Thailand</h1>
              <p className='text-wrap text-sm'>Your Professional Laundry Service in Bangkok.</p>
              </div>
              <FaArrowRightLong className='font-slim -rotate-45 text-3xl self-center'/>
            </div>
        </Link>
        <Link href={"https://github.com/Ishtiaq-Ahmed101/stackOverflow2.0/"} className='bg-bg_primary2 p-[20px] md:p-[30px] lg:p-[50px] rounded-md  self-center flex flex-row relative justify-center group '>
            <Image
            src={"/projects/devoverflowProject.jpg"}
            height={1000}
            width={1000}
            alt='works'
            className=' rounded-md  h-[300px] w-[390px] lg:h-[340px] lg:w-[420px] object-cover overflow-hidden'
            />
            <div className=' absolute bottom-14 left-auto bg-gradient-to-r from-bg_primary to-bg_primary2 hidden group-hover:flex flex-row  w-[75%]  p-3 rounded-md'>
              <div className='flex flex-col'>
              <h1 className='font-bold text-xl'>DevOverflow</h1>
              <p className='text-wrap text-sm'>Stackover Flow alternative stackOverflow2.0.</p>
              </div>
              <FaArrowRightLong className='font-slim -rotate-45 text-3xl self-center'/>
            </div>
        </Link>
       
      </div>
    </div>
  </div>
  )
}

export default RecentWorks
