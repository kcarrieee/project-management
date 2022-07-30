import React from 'react'

const Spinner = () => {
  return (
    <div className='w-full h-screen grid place-content-center '>
        <div className='h-8 w-8 animate-pulse bg-black animate-ping rounded-full '></div>
    </div>
  )
}

export default Spinner