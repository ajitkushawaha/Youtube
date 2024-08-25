import React, { useState } from "react";
import "./header.css";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";
import { Search, VideoCall } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Profile from "./Profile";
import UploadVideo from "./UploadVideo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const navigation = useNavigate();

  const handleHide = () => {
    setHide(!hide);
  };

  const clickSearch = () => {
    navigation("/searchpage")
  }



  return (
    <>
      <div className="header  shadow-sm shadow-gray-900 ">
        <nav>
          <div className="nav-left">
            <DehazeRoundedIcon className="menu" />
            <img
              className="yt-logo"
              src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png"
              alt="youtube-logo"
            />
          </div>
          <div className="nav-mid">
            <input
            type="text"
            placeholder="Search videos..."
            />
            <Search onClick={clickSearch} />
          </div>
          <div className="nav-right ">
            <VideoCall  onClick={() => setOpen(true)} title="Create"/>
            <NotificationsIcon />
            <div className="w-8 rounded-full overflow-hidden">
              <img
                onClick={handleHide}
                className="object-cover"
                src="https://yt3.ggpht.com/ytc/AGIKgqPldakHLzbIJj2dMmU5TW6P00ztoPmO1G24DnYWkQ=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
          </div>
        </nav>
        {hide && <Profile />}
      </div>
      {open && <UploadVideo setOpen={setOpen}/>}
    </>
  );
};

export default Header;
