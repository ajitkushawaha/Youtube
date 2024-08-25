import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { VideoContext } from "../../context/VideoProvider";

const VideoCard = () => {
  const videos = useContext(VideoContext);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  if (!videos) {
    return <div>No videos available.</div>;
  }

  const handleMouseEnter = (videoId) => {
    setHoveredVideoId(videoId);
  };
  const handleMouseClick = (videoId) => {
    console.log("you poke me", videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideoId(null);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <div
          key={video.id}
          className=" w-1/3 h-80 gap-2 flex flex-col items-center justify-betwe px-1 "
          onMouseEnter={() => handleMouseEnter(video.id)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMouseClick(video.id)}
        >
          <div className="w-full h-3/4 border border-gray-500/25 rounded-2xl hover:rounded flex-1 flex-shrink-1 flex-basis-10rem overflow-hidden">
            <Link to={`/viewvideo/${video.id}`}>
              <div className="w-full h-full flex ">
                {hoveredVideoId === video.id ? (
                  <video
                    src={video.videoUrl}
                    controls
                    className="object-fill border-0"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="object-cover w-full"
                    src={video.imageUrl}
                    alt="video loading"
                  />
                )}
              </div>
            </Link>
          </div>
          <div className="flex w-full gap-1 p-1">
            <div className="left ">
              <img
                className="rounded-full w-12 object-cover"
                src={video.channelImg}
                alt="pimg"
              />
            </div>
            <div className="right w-full">
              <h3 className="text-lg">{video.title}</h3>
              <Link to="/channel">
                <p className="text-md text-gray-500 hover:text-gray-100">
                  {video.channelName}
                </p>
              </Link>
              <div className="flex gap-1 text-sm text-gray-500">
                <span>{video.views} view</span>
                <span>{video.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
