import React, { useState } from "react";
import VideoCard from "./VideoCard";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { CloseOutlined } from "@mui/icons-material";
import Shorts from "./ShortsVideo";

const Home = () => {
  const [isHide, setHide] = useState("false");
  const [seeMore, setSeeMore] = useState("false");
  const [buttonText, setButtonText] = useState("...");

  function ClickHandle() {
    setHide(!isHide);
  }
  function HandleSeeMore() {
    setSeeMore(!seeMore);
    setButtonText(!seeMore ? "..." : "");
  }
  return (
    <div className="w-full bg-black p-5 text-white">
      <div className=" w-full flex flex-row gap-5  flex-wrap ">
        <VideoCard />
        <hr className=" mt-6 h-1 border-0 bg-gray-500 w-full rounded" />
        {isHide && (
          <div className="">
            <div className="flex items-center justify-between">
              <div className=" flex gap-2 text-xl items-center justify-center">
               
                <SlideshowIcon />
                Shorts
              </div>
              <span
                onClick={ClickHandle}
                title="Not Instrested"
                className="hover:bg-gray-800 p-2 rounded-full "
              >
                <CloseOutlined />{" "}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 mt-2 flex-wrap">
                <Shorts />
              </div>
              {!seeMore && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  <Shorts />
                </div>
              )}
              <div></div>
              <span
                onClick={HandleSeeMore}
                className="text-right cursor-pointer text-3xl font-bold mr-4"
              >
                {buttonText}
              </span>
            </div>
            <hr className="my-6 h-1 border-0 bg-gray-500 rounded" />
            <h3 className="text-2xl font-bold  pb-2">Recomended Video</h3>
            <VideoCard />
            <hr className="my-8 h-1 border-0 bg-gray-500 rounded" />

          </div>
        )}
        <VideoCard />
      </div>
    </div>
  );
};

export default Home;
