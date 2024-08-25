import React, { useState, useContext, useRef } from "react";
import { ShortsContext } from "../../context/VideoProvider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { ShareOutlined, ThumbDown, ThumbUp,  } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";

const Shorts = () => {
  const shorts = useContext(ShortsContext);
  const videoRefs = useRef({});
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const [subscribe, setSubscribe] = useState(false);
  const [likeCount, setLikeCount] = useState(22);
  const [disLikeCount, setDisLikeCount] = useState(2);
  const navigate = useNavigate();

  const togglePlay = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video.paused) {
      Object.values(videoRefs.current).forEach((ref) => {
        if (ref !== video) {
          ref.pause();
        }
      });
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId],
    }));
  };

  const toggleMute = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
    setIsMuted((prevState) => ({
      ...prevState,
      [videoId]: !prevState[videoId],
    }));
  };

  const handleLike = (videoId) => {
    setLikeCount(likeCount + 1);
      
  };

  const handleDislike = (videoId) => {
    setDisLikeCount(disLikeCount + 1);
  };

  const handleNavigate = (videoId) => {
    navigate("/channel")
  }
  const hendleSubscribe = (videoId)=>{
      setSubscribe(!subscribe)
  }

  return (
    <div className="w-full text-white">
      {shorts.map((video) => (
        <div
          key={video.id}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center  w-full">
            <div className="relative " >
              <video
                onClick={() => togglePlay(video.id)}
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.videoUrl}
                className="border border-white mb-6 rounded-2xl"
                style={{height: '38rem' , Width: '24rem'}}
              >
              </video>
              <div className="absolute w-full top-8  flex justify-between ">
                <div className="pl-6 ">
                  {isPlaying[video.id] ? (
                    <PauseIcon onClick={() => togglePlay(video.id)} />
                  ) : (
                    <PlayArrowIcon onClick={() => togglePlay(video.id)} />
                  )}
                </div>
                <div className="pr-6">
                  {isMuted[video.id] ? (
                    <VolumeOffIcon onClick={() => toggleMute(video.id)} />
                  ) : (
                    <VolumeUpIcon onClick={() => toggleMute(video.id)} />
                  )}
                </div>
              </div>
              <div className="absolute bottom-7 p-2">
                <h3 className="text-xl text-white">{video.tag}</h3>
                <div className="flex items-center justify-between  w-ful ">
                  <div className="flex items-center">
                    <div className="w-16 rounded-full overflow-hidden"
                    onClick={handleNavigate}>
                      <img 
                        src={video.channelImgs}
                        alt="loading"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white bg-gray-100/5 text-xl font-bold">
                      {video.channelName}
                    </h3>
                  </div>
                  <button className={`bg-white text-gray-800 py-2 px-6 rounded-3xl ${subscribe ? 'bg-gray-600/90 text-gray-100' : 'bg-white'}`}
                  onClick={hendleSubscribe}>
                    {subscribe ? "Subscribed" : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>

            <div className="self-end mb-5 ml-5">
              <ul className="text-white flex flex-col justify-between h-96">
                <li className=" flex-col flex items-center justify-center ">
                  <div className="bg-gray-200/10 rounded-full h-14 w-14 flex items-center justify-center  ">
                    <ThumbUp fontSize="large" 
                    onClick={ handleLike}/>
                  </div>
                  <span>{likeCount}k</span>
                </li>
                <li className=" flex-col flex items-center justify-center ">
                  <div className="bg-gray-200/10 rounded-full h-14 w-14 flex items-center justify-center  ">
                    <ThumbDown fontSize="large" 
                    onClick={handleDislike}/>
                  </div>
                  <span>{disLikeCount}</span>
                </li>
                <li className=" flex-col flex items-center justify-center ">
                  <div className="bg-gray-200/10 rounded-full h-14 w-14 flex items-center justify-center  ">
                    <ShareOutlined fontSize="large" />
                  </div>
                  <span>502</span>
                </li>
                <li className=" flex-col flex items-center justify-center ">
                  <div className="bg-gray-200/10 rounded-full h-14 w-14 flex items-center justify-center  ">
                    <ChatIcon fontSize="large" />
                  </div>
                  <span>3k</span>
                </li>
                <li>
                  <img
                    src={video.channelImgs}
                    alt="loading"
                    className="w-12 rounded-2xl"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
