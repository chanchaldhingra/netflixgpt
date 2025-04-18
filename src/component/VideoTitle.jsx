import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen h-[100vh] aspect-video top-0 pt-[12%] px-6 absolute md:px-24  text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='"hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div className="my-4 md:m-0">
            <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80 cursor-pointer'> Play</button>
            <button className='hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle