import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { VideoContext } from "../../context/VideoProvider";

const VideoPlayList = () => {
  const videos = useContext(VideoContext);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id} className="flex items-start gap-2 w-full pt-2 px-2 ">
          <div className=" w-1/2 flex h-28 rounded">
            <video
              src={video.videoUrl} // Use video.videoUrl to access the video URL
              controls
              className="object-fill border-0 rounded"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=" w-1/2 leading-4">
            <h3 className="text-base text-gray-200">{video.title}</h3>{" "}
            {/* Use video.title */}
            <Link to="/channel">
              <p className="text-sm font-bold text-gray-500 hover:text-gray-100">
                {video.channelName} {/* Use video.channelName */}
              </p>
            </Link>
            <div className="flex text-s text-gray-500">
              <span>{video.views} view</span>
              <span>&#183; {video.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayList;
