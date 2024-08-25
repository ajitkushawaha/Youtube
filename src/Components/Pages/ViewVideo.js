import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VideoContext } from "../../context/VideoProvider";
import VideoPlayList from "../Utils/VideoPlayList";

const ViewVideo = () => {
  const { id } = useParams(); 
  const videos = useContext(VideoContext);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const selectedVideo = videos.find((video) => video.id === parseInt(id, 10));

    if (selectedVideo) {
      setVideoData(selectedVideo);
    } else {
      console.log("video with the given ID was not found");
    }
  }, [id, videos]);

  return (
    <div className="flex w-full sticky top-0">
      <div className="  w-2/3 bg-black h-80 gap-2 flex flex-col items-center justify-betwe px-1 ">
        <div className="w-full h-full flex ">
          <video
            src={videoData.videoUrl}
            controls
            className="object-fill border-0"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex w-full gap-1 p-1">
          <div className="left ">
            <img
              className="rounded-full w-12 object-cover"
              src={videoData.channelImg}
              alt="pimg"
            />
          </div>
          <div className="right w-full">
            <h3 className="text-lg">{videoData.title}</h3>
            <Link to="/channel">
              <p className="text-md text-gray-500 hover:text-gray-100">
                {videoData.channelName}
              </p>
            </Link>
            <div className="flex gap-1 text-sm text-gray-500">
              <span>{videoData.views} view</span>
              <span>{videoData.duration}</span>
            </div>
          </div>
        </div>
      </div>
      {/* right playlist */}
      <VideoPlayList />
    </div>
  );
};

export default ViewVideo;
