import React from 'react'
import SocialLinks from './SocialLinks'


const contact = () => {
  return (

    <div id='contact' style={{backgroundImage:"url('/FrameContact.svg')"}} className='flex flex-col justify-center py-[10rem] bg-bg_primary3 w-full my-[3rem] bg-cover bg-center'>
    <div className='self-center flex flex-col gap-5'>
    <h1 className='text-3xl font-bold self-center '>Contact Me</h1>

    <div className=' flex  justify-center flex-wrap self-center gap-3'>
      <input className='bg-bg_primary2 border border-bg_primary rounded-md text-bg_primary4 px-1' type="text" placeholder='Name' />
      <input className='bg-bg_primary2 border border-bg_primary rounded-md text-bg_primary4 px-1' type="text" placeholder='Email' />
    </div>
    <textarea  className='bg-bg_primary2 border border-bg_primary rounded-md text-bg_primary4 px-1 min-h-[200px] mx-4 sm:mx-0' name="Message" id="" placeholder='Message'></textarea>
    <button className='bg-bg_primary2 border border-bg_primary rounded-md text-gray-400 hover:border-bg_white transition-colors px-1 hover:text-bg_primary4 self-center w-full mx-4 sm:mx-0' >Send</button>


    </div>
  </div>

  )
}

export default contact
