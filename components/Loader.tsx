import React from 'react'

const Loader = () => {
  return (
    <div className='h-100vh w-full flex flex-col justify-center bg-red-600 z-10'>
        <div className='h-full w-full flex flex-row justify-center'>
            <div className='rounded-full bg-transparent border-2 border-cyan-500 animate-spin'>

            </div>
        </div>
    </div>
  )
}

export default Loader;
