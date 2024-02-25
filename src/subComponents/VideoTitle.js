import React from "react";

const VideoTitle = ({ id, title, overview }) => {
  return (
    <>
      <div className="pt-48 mx-28">
        <h1 className="text-7xl text-gray ">{title}</h1>
        <p className="text-sm font-bold w-3/6 mt-5">{overview}</p>
        <div className="mt-8">
          <button className="font-bold text-xl px-8 py-2 border-2 bg-white rounded-lg hover:bg-gray-400">
            ▶ Play
          </button>
          <button className="font-bold text-xl px-8 py-2 border-2 mx-2 text-white bg-gray-400 rounded-lg hover:bg-gray-300 ">
            ℹ More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
