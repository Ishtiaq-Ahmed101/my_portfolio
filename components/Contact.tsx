'use client'
import React from 'react'
import { useState } from 'react'
import { json } from 'stream/consumers'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSendEmail = async ()=>{
   
    const Message = {
      name,
      email,
      message,
    }

    console.log('handle clicked')
    console.log(Message)

    const respone = await fetch('/api/sendEmail', {
      method: 'Post',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(Message)
    })
    const data = await respone.json();
    console.log(data)



  }





  return (

    <div id='contact' style={{backgroundImage:"url('/FrameContact.svg')"}} className='flex flex-col justify-center py-[10rem] bg-bg_primary3 w-full my-[3rem] bg-cover bg-center'>
    <div className='self-center flex flex-col gap-5'>
    <h1 className='text-3xl font-bold self-center '>Contact Me</h1>

    <div className=' flex  justify-center flex-wrap self-center gap-3'>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} className='bg-bg_primary2 border border-bg_primary rounded-md text-bg_primary4 px-1' type="text" placeholder='Name' />
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-bg_primary2 border border-bg_primary rounded-md text-bg_primary4 px-1' type="text" placeholder='Email' />
    </div>
    <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} className='bg-bg_primary2 border border-bg_primary rounded-md text-bg_primary4 px-1 min-h-[200px] mx-4 sm:mx-0' name="Message" id="" placeholder='Message'></textarea>
    <button onClick={()=>{handleSendEmail()}} className='bg-bg_primary2 border border-bg_primary rounded-md text-gray-400 hover:border-bg_white transition-colors px-1 hover:text-bg_primary4 self-center w-full mx-4 sm:mx-0' >Send</button>


    </div>
  </div>

  )
}

export default Contact
