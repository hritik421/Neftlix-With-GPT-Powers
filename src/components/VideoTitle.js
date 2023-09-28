import React from 'react'

const VideoTitle = (props) => {
  const {title, overview} = props;
  return (
    <div className='w-screen aspect-video pt-[13%] px-5 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl font-bold '>{title}</h1>
        <p className='hidden md:inline-block w-1/3 my-3'>{overview}</p>
        <div>
            <button className='text-xl font-semibold text-black bg-white p-4 px-12 rounded-md hover:bg-opacity-80'>
                Play
            </button>
            <button className='hidden md:inline-block text-xl m-2 font-semibold text-white bg-gray-600 p-4 px-12 rounded-md bg-opacity-50'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle