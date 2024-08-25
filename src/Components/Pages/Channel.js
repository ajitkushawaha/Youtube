import React from "react";

const Channel = () => {
  function HandleSubscribe(){

  }
  return (
    <div className="w-ful px-4  ">
      <div className="w-full border bg-gray-300  h-80 p-4  flex items-center justify-center text-white">
        <img
          className="w-full object-cover"
          src="./image/Ajit Kushwaha.png"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center bg-black text-white mt-4">
        <div className="flex items-center gap-8 ">
          <div className="w-40 rounded-full overflow-hidden">
            <img
              className="w-32"
              src="https://yt3.googleusercontent.com/m-FbG7zwy9uuelkhgj4BqkpSGuL29FCDaibjs6P5KmmACUgm5N4iAk2SbJNuHK7dBqUEvSEf=s176-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <h3 className="text-2xl pb-1">Ajit Kushwaha</h3>
              <span className="pr-1 text-base">@ajitkushwaha77</span>
              <span className="pr-1 text-base">222k subscriber</span>
              <span className="pr-1 text-base">3 videos</span>
            </div>
            <p>
              Need coding or programming help? Please contact me. LIKE, SHARE &
              SUB....
            </p>
          </div>
        </div>
        <button onClick={HandleSubscribe} className=" bg-white text-gray-800 px-6 py-2 font-semibold rounded-full">
          Subscribe
        </button>
      </div>
      
    </div>
  );
};

export default Channel;
