import React from 'react'

const VideoTitle = (props) => {
  const {title, overview} = props;
  return (
    <div className='w-screen aspect-video pt-[13%] px-5 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl font-bold mb-3 lg:mb-0'>{title}</h1>
        <p className='w-1/3 my-3 hidden lg:inline-block'>{overview}</p>
        <div>
            <button className='text-xl font-semibold text-black bg-white rounded-md hover:bg-opacity-80 p-3 px-12'>
                Play
            </button>
            <button className='text-xl m-2 font-semibold text-white bg-gray-600 p-4 px-12 rounded-md bg-opacity-50 hidden lg:inline-block'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle