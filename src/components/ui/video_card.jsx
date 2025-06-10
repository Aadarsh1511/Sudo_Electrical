import React from 'react'

const video_card = () => {
  const thumbnails = [
    "https://via.placeholder.com/220x220?text=Video+1",
    "https://via.placeholder.com/220x220?text=Video+2",
    "https://via.placeholder.com/220x220?text=Video+3",
    "https://via.placeholder.com/220x220?text=Video+4",
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Follow Us</h1>
      <p className="text-center text-gray-500 mb-4">@OrientElectric</p>
      <p className="text-center text-sm text-gray-400 mb-10">121k followers</p>

      <div className="flex flex-wrap justify-center gap-6">
        {thumbnails.map((thumb, index) => (
          <VideoCard key={index} thumbnail={thumb} />
        ))}
      </div>
    </div>
  )
}

export default video_card;