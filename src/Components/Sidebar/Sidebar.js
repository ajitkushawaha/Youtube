import React, { useState } from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const Sidebar = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowTitle) => {
    setSelectedRow(rowTitle);
  };

  return (
    <div className=" basis-1/5  sticky top-6 self-start bg-gray-900 max-md:hidden">
      <div className="ml-2 text-gray-200 w-full ">
        <SidebarRow
          Icon={HomeIcon}
          selected={selectedRow === "Home"}
          title="Home"
          path="/"
          onClick={() => handleRowClick("Home")}
        />
        <SidebarRow
          Icon={SlideshowIcon}
          selected={selectedRow === "Shorts"}
          title="Shorts"
          path="/shorts"
          onClick={() => handleRowClick("Shorts")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Subscription"}
          title="Subscription"
          path="/subscription"
          onClick={() => handleRowClick("Subscription")}
        />
      </div>
      <hr className="my-4 w-6/6 h-px border-0 bg-gray-500" />
      <div className="ml-2 pr-2 text-gray-200 w-full ">
        <SidebarRow
          Icon={HomeIcon}
          selected={selectedRow === "Library"}
          title="Library"
          path="/library"
          onClick={() => handleRowClick("Library")}
        />
        <SidebarRow
          Icon={SlideshowIcon}
          selected={selectedRow === "History"}
          title="History"
          path="/"
          onClick={() => handleRowClick("History")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Your videos"}
          title="Your videos"
          path="/"
          onClick={() => handleRowClick("Your videos")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Watch later"}
          title="Watch later"
          path="/watch"
          onClick={() => handleRowClick("Watch later")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Liked videos"}
          title="Liked videos"
          path="/"
          onClick={() => handleRowClick("Liked videos")}
        />

        <SidebarRow
          Icon={ExpandMoreSharpIcon}
          selected={selectedRow === "Show more"}
          title="Show more"
          path="/"
          onClick={() => handleRowClick("Show more")}
        />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-500" />
      </div>
      <div className="ml-2 text-gray-200 w-full ">
        <h3 className="font-semibold text-lg px-4">Subscription</h3>
        <SidebarRow
          Icon={HomeIcon}
          selected={selectedRow === "Library"}
          title="Library"
          path="/library"
          onClick={() => handleRowClick("Library")}
        />
        <SidebarRow
          Icon={SlideshowIcon}
          selected={selectedRow === "History"}
          title="History"
          path="/"
          onClick={() => handleRowClick("History")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Your videos"}
          title="Your videos"
          path="/"
          onClick={() => handleRowClick("Your videos")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Watch later"}
          title="Watch later"
          path="/watch"
          onClick={() => handleRowClick("Watch later")}
        />
        <SidebarRow
          Icon={SubscriptionsIcon}
          selected={selectedRow === "Liked videos"}
          title="Liked videos"
          path="/"
          onClick={() => handleRowClick("Liked videos")}
        />

        <SidebarRow
          Icon={ExpandMoreSharpIcon}
          selected={selectedRow === "Show more"}
          title="Show more"
          path="/"
          onClick={() => handleRowClick("Show more")}
        />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-500" />
      </div>
      <div className="ml-1 pr-2 text-gray-200 w-full ">
        <h3 className="font-semibold text-lg px-4">Explore</h3>
        <SidebarRow
          path="/"
          Icon={HomeIcon}
          title="Trending"
          selected={selectedRow === "Trending"}
          onClick={() => handleRowClick("Trending")}
        />
        <SidebarRow
          path="/"
          Icon={SlideshowIcon}
          title="Shoping"
          selected={selectedRow === "Shoping"}
          onClick={() => handleRowClick("Shoping")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Your videos"
          selected={selectedRow === "Your videos"}
          onClick={() => handleRowClick("Your videos")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Music"
          selected={selectedRow === "Music"}
          onClick={() => handleRowClick("Music")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Live"
          selected={selectedRow === "Live"}
          onClick={() => handleRowClick("Live")}
        />
        <SidebarRow
          path="/"
          Icon={SportsEsportsOutlinedIcon}
          title="Gaming"
          selected={selectedRow === "Gaming"}
          onClick={() => handleRowClick("Gaming")}
        />
        <SidebarRow
          path="/"
          Icon={ArticleOutlinedIcon}
          title="News"
          selected={selectedRow === "News"}
          onClick={() => handleRowClick("News")}
        />
        <SidebarRow
          path="/"
          Icon={SchoolOutlinedIcon}
          title="Learning"
          selected={selectedRow === "Learning"}
          onClick={() => handleRowClick("Learning")}
        />

        <hr className="my-4 w-6/6 h-px border-0 bg-gray-500" />
      </div>
      <div className="ml-1 pr-2 text-gray-200 w-full ">
        <h3 className="font-semibold text-lg px-4">More from YouTube</h3>
        <SidebarRow
          path="/"
          Icon={HomeIcon}
          title="Trending"
          selected={selectedRow === "Trending"}
          onClick={() => handleRowClick("Trending")}
        />
        <SidebarRow
          path="/"
          Icon={SlideshowIcon}
          title="Shoping"
          selected={selectedRow === "Shoping"}
          onClick={() => handleRowClick("Shoping")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Your videos"
          selected={selectedRow === "Your videos"}
          onClick={() => handleRowClick("Your videos")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Music"
          selected={selectedRow === "Music"}
          onClick={() => handleRowClick("Music")}
        />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-500" />
      </div>
      <div className="ml-1 pr-2 text-gray-200 w-full ">
        <SidebarRow
          path="/"
          Icon={HomeIcon}
          title="Trending"
          selected={selectedRow === "Trending"}
          onClick={() => handleRowClick("Trending")}
        />
        <SidebarRow
          path="/"
          Icon={SlideshowIcon}
          title="Shoping"
          selected={selectedRow === "Shoping"}
          onClick={() => handleRowClick("Shoping")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Your videos"
          selected={selectedRow === "Your videos"}
          onClick={() => handleRowClick("Your videos")}
        />
        <SidebarRow
          path="/"
          Icon={SubscriptionsIcon}
          title="Music"
          selected={selectedRow === "Music"}
          onClick={() => handleRowClick("Music")}
        />
        <hr className="my-4 w-6/6 h-px border-0 bg-gray-500" />
      </div>
      <div className="ml-1 pr-2 text-gray-200 w-full text-base ">
        <p className=" ">
          AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
        </p>
        <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <span>© 2023 Google LLC</span>
      </div>
    </div>
  );
};

export default Sidebar;
