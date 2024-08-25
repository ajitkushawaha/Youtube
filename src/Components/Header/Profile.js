import React from "react";
import ProfileData from "./ProfileData";
import { AccountCircleOutlined } from "@mui/icons-material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
const Profile = () => {
  return (
    <div className="absolute top-12 right-12 h-screen w-88 p-3  bg-gray-900 rounded ">
      <div className="flex justify-between gap-4 ">
        <div className="rounded-full w-12">
          <img
            className=" rounded-full object-cover"
            src="https://yt3.ggpht.com/ytc/AGIKgqPldakHLzbIJj2dMmU5TW6P00ztoPmO1G24DnYWkQ=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div>
          <h3>Ajit Kushwaha</h3>
          <h3>@ajitkushwaha77</h3>
          <span className="text-blue-500">Manage Your Google Acount</span>
        </div>
      </div>
      <hr className="my-4 w-6/6 h-px border-0 bg-gray-400" />
      <div className=" h-full ">
        <ProfileData icon={<AccountCircleOutlined />} title="Your Channel" />
        <ProfileData icon={<VideoSettingsIcon />} title="YouTube Studio" />
        <ProfileData icon={<SupervisedUserCircleIcon />} title="Swich Acount" />
        <ProfileData icon={<LogoutIcon />} title="Sign out" />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-400" />
        <ProfileData
          icon={<NightlightRoundIcon />}
          title="Appearance:Device theme"
        />
        <ProfileData icon={<TranslateIcon />} title="Language:English" />
        <ProfileData
          icon={<AdminPanelSettingsIcon />}
          title="Ristricted Mode:off"
        />
        <ProfileData icon={<LanguageIcon />} title="Location:India" />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-400" />
        <ProfileData icon={<SettingsIcon />} title="Setting" />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-400" />
        <ProfileData icon={<HelpIcon />} title="Help" />
        <ProfileData icon={<FeedbackIcon />} title="Send Feedback" />
      </div>
    </div>
  );
};

export default Profile;
