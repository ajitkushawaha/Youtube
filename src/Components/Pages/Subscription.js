import React, { useContext, useState } from "react";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import VideoCard from "../Home/VideoCard";
import { Link } from "react-router-dom";
import { SubscriptionContext } from "../../context/VideoProvider";


const Subscription = () => {
  const Videos = useContext(SubscriptionContext);

  const [isHideGrid, setIshideGrid] = useState(false);


  const handleGridClick = () => {
    setIshideGrid(!isHideGrid);
  };
  if (!Videos || Videos.length === 0) {
    return <div className="text-white">Loading...</div>; // You can add a loading state or error handling here
  }
  // Dummy data for subscription videos
  // const Videos = [
  //   {
  //     id: 1,
  //     title: "New video on online courses javascript java html css.",
  //     thumbnailUrl: "./image/t1.jpg",
  //     channel: "GT Hindi",
  //     channelImg:"./image/c2.png",
  //     views: "72 ",
  //     duration: "2 minutes ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"
  //   },
  //   {
  //     id: 2,
  //     title: "Top ten new funny prank videos",
  //     thumbnailUrl: "./image/t2.png",
  //     channel: "Pranker",
  //     channelImg:"./image/c1.png",
  //     views: "20k ",
  //     duration: "2min ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   {
  //     id: 3,
  //     title: "Listen to the new top 5 music",
  //     thumbnailUrl: "./image/t3.png",
  //     channel: "Top music",
  //     channelImg:"./image/c3.png",
  //     views: "20k ",
  //     duration: "2min ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   {
  //     id: 4,
  //     title: "How to Make mutton biriyani",
  //     thumbnailUrl: "./image/t4.png",
  //     channel: "Foodies",
  //     channelImg:"./image/c4.png",
  //     views: "20k ",
  //     duration: "2min ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   {
  //     id: 5,
  //     title: "this is new video",
  //     thumbnailUrl: "./image/t1.jpg",
  //     channel: "Business Education",
  //     channelImg:"./image/c1.png",
  //     views: "1m ",
  //     duration: "2week ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   {
  //     id: 6,
  //     title: "top ten new funny prank",
  //     thumbnailUrl: "./image/t2.png",
  //     channel: "Pranker",
  //     channelImg:"./image/c2.png",
  //     views: "20k ",
  //     duration: "2min ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   {
  //     id: 7,
  //     title: "top ten new funny prank",
  //     thumbnailUrl: "./image/t3.png",
  //     channel: "Top music",
  //     channelImg:"./image/c3.png",
  //     views: "20k ",
  //     duration: "2min ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   {
  //     id: 8,
  //     title: "top ten new funny prank",
  //     thumbnailUrl: "./image/t4.png",
  //     channel: "Foodies",
  //     channelImg:"./image/c4.png",
  //     views: "20k ",
  //     duration: "2min ago",
  //     des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

  //   },
  //   // Add more video objects here...
  // ];

  return (
    <div className="w-full text-white px-12 py-2">
      <div className="flex items-center justify-between mb-2">
        <h2>Subscription Videos</h2>
        <div className="flex items-center gap-4">
          <p className="font-bold">Manage</p>
          {!isHideGrid ? (
            <TableRowsSharpIcon
              className="cursor-pointer"
              onClick={handleGridClick}
            />
          ) : (
            <ViewModuleSharpIcon 
              className="cursor-pointer"
              onClick={handleGridClick}
            />
          )}
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        {isHideGrid ? (
          Videos.map((video) => (
            <div key={video.id} className="text-white w-full px-2">
              <div className="flex items-start gap-2 pb-2">
                <img
                  src={video.channelImg}
                  alt=""
                  className="w-12 rounded-full"
                />
                <h3>{video.channel}</h3>
              </div>
              <div className="flex w-full gap-2">
                <div className="w-1/3 text-white ">
                  <img
                    src={video.thumbnailUrl}
                    className="rounded object-cover"
                    alt={video.title}
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="text-white">
                    <h3>{video.title}</h3>
                  </div>
                  <div className="flex items-start gap-2">
                    <Link to="/channel">
                      <p className="text-sm text-gray-500 hover:text-white">
                        {video.channel}
                      </p>
                    </Link>
                    <p className="text-sm text-gray-500">{video.views} view</p>
                    <p className="text-sm text-gray-500">• {video.duration}</p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    <p>{video.des}</p>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-0 h-px bg-gray-500" />
            </div>
          ))
        ) : (
          <VideoCard />
        )}
      </div>
    </div>
  );
};

export default Subscription;
