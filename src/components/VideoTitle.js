import React from 'react'

const VideoTitle = (title, overview) => {
  return (
    <div className=''>
        <h1>title</h1>
        <p>overview</p>
        <div>
            <button className='text-xl font-semibold text-white bg-gray-400 w-12 p-4'>
                Play
            </button>
            <button>
                More Infor
            </button>
        </div>
    </div>
  )
}

export default VideoTitle