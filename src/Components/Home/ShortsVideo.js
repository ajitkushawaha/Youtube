import React, { useContext } from "react";
import { ShortsContext } from "../../context/VideoProvider";


const ShortsVideo = () => {
  const shorts = useContext(ShortsContext)
  return (
    <>
    { shorts.map((short)=>(
    <div key={short.id}
    className="w-40 h-96 gap-2  flex flex-col items-center justify-between hover:scale-105 ">
      <div className="w-full h-3/4 border border-gray-500/25 rounded-xl overflow-hidden ">
        <video src={short.videoUrl} controls>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex w-full gap-1">
        <div className="right">
          <h3 className="text-lg">
            {short.title}
          </h3>
          <div className="flex gap-1 text-sm text-gray-500">
            <span>{short.views} views</span>
          </div>
        </div>
      </div>
    </div>))}
    </>
  );
};

export default ShortsVideo;
