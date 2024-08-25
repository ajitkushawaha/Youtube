import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Shorts from "./Pages/Shorts";
import Subscription from "./Pages/Subscription";
import WatchLater from "./Pages/WatchLater";
import Libraries from "./Pages/Libraries";
import Channel from "./Pages/Channel";
import Searchpage from "./Pages/Searchpage";
import ViewVideo from "./Pages/ViewVideo";

const Routers = () => {
  return (
    <div className="w-full">
      <div className=" w-full">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shorts" element={<Shorts/>} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/library" element={<Libraries />} />
          <Route path="/watch" element={<WatchLater />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/searchpage" element={<Searchpage/>} />
          <Route path="/viewvideo/:id" element={<ViewVideo/>} /> 
        </Routes>
      </div>
    </div>
  );
};

export default Routers;
