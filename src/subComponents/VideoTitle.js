import React from "react";

const VideoTitle = ({ id, title, overview }) => {
  return (
    <div className="absolute pt-[20%] px-24 w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-7xl text-gray ">{title}</h1>
      <p className="text-sm font-bold w-2/6 mt-5">{overview}</p>
      <div className="mt-8">
        <button className="font-bold text-xl px-8 py-2 border-2 text-black bg-white rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="font-bold text-xl px-8 py-2 border-2 mx-2 text-white bg-gray-500 rounded-lg hover:bg-opacity-80 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
