import React from "react";

const UploadVideo = ({ setOpen }) => {
  return (
    <div className=" flex items-center justify-center w-full h-screen  top-0 left-0  bg-black/90 z-30  sticky ">
      <div className=" flex flex-col gap-5 relative text-white border border-gray-500/20 w-6/12 h-3/5 p-5 bg-black ">
        <span
          className="absolute right-5 top-3 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          X
        </span>
        <h1 className="text-white text-center">Upload a New Video</h1>
        <input
          type="file"
          accept="video/*"
          className="border-gray-500/20 border bg-transparent rounded p-1 "
        />
        <input
          type="text"
          className="border-gray-500/20 border bg-transparent rounded p-1 "
         placeholder="Title"/>
        <textarea name="" id="" cols="10" rows="3" placeholder="Description"
        className="border-gray-500/20 border bg-transparent rounded p-1">

        </textarea>
        <input
          type="file"
          accept="image/*"
          className="border-gray-500/20 border bg-transparent rounded p-1 "
        />
      </div>
    </div>
  );
};

export default UploadVideo;
