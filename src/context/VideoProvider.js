import React, { createContext } from "react";
const VideoContext = createContext();
const ShortsContext = createContext();
const SubscriptionContext = createContext();



const VideoProvider = ({ children }) => {
  const videoData = [
    {
      id: 1,
      title: "Learn online courses free",
      time: "1 minute ago",
      views: "1m",
      channelName: "Business Education",
      channelImg: "/image/c1.png",
      imageUrl: "/image/t1.jpg",
      videoUrl: "/image/shorts2.mp4",
    },
    {
      id: 2,
      title: "Top 10 prank video",
      time: "1 year ago",
      views: "100k",
      channelName: "PrankerWala ",
      channelImg: "/image/c2.png",
      imageUrl: "/image/t2.png",
      videoUrl: "/image/shorts2.mp4",
    },
    {
      id: 3,
      title: "Here you can listen top music free",
      time: "59 minutes ago",
      views: "500k",
      channelName: "Top Music",
      channelImg: "/image/c3.png",
      imageUrl: "/image/t3.png",
      videoUrl: "/image/shorts2.mp4",
    },
    {
      id: 4,
      title: "Vegg biryani recipe",
      time: "1 year ago",
      views: "10k",
      channelName: "OnlineRestrorent",
      channelImg: "/image/c5.png",
      imageUrl: "/image/t4.png",
      videoUrl: "/image/food.mp4",
    },
    {
      id: 5,
      title: "How to make $700 money daily",
      time: "1 week ago",
      views: "533k",
      channelName: "Daily Tips",
      channelImg: "/image/c4.png",
      imageUrl: "/image/t5.png",
      videoUrl: "/image/shorts2.mp4",
    },
    {
      id: 6,
      title: "Today we learn home decoration",
      time: "30 minutes ago",
      views: "222k",
      channelName: "MotivationP20",
      channelImg: "/image/c1.png",
      imageUrl: "/image/t6.png",
      videoUrl: "/image/shorts2.mp4",
    },
  ];

  const shortVideoData = [
    {
      id: 1,
      title: "Muskaro jab tum fail hote ho",
      views: "1m",
      videoUrl: "./image/shorts1.mp4",
      channelImgs:"./image/c1.png",
      channelName:"Coder dost",
      tag:"Ye Hum Kya Sunn Rahe Hai 🤣 #judwaaz #sushantnishant #judwaaztv #judwaazshorts"
    
    },
    {
      id: 2,
      title: "Learn online courses free",
      views: "4m",
      videoUrl: "./image/shortfood.mp4",
      channelImgs:"./image/c2.png",
      channelName:"judwaaz",
      tag:"Ye Hum Kya Sunn Rahe Hai 🤣 #judwaaz #sushantnishant #judwaaztv #judwaazshorts"
    
    },
    {
      id: 3,
      title: "Learn online courses free",
      views: "1m",
      videoUrl: "./image/shorts1.mp4",
      channelImgs:"./image/c1.png",
      channelName:"TSeries",
      tag:"Ye Hum Kya Sunn Rahe Hai 🤣 #judwaaz #sushantnishant #judwaaztv #judwaazshorts"
    
    },
    {
      id: 4,
      title: "Learn online courses free",
      views: "10k",
      videoUrl: "./image/shorts1.mp4",
      channelImgs:"./image/c3.png",
      channelName:"Khuch bhi",
      tag:"Ye Hum Kya Sunn Rahe Hai 🤣 #judwaaz #sushantnishant #judwaaztv #judwaazshorts"
    
    },
    {
      id: 5,
      title: "Learn online courses free",
      views: "100k",
      videoUrl: "./image/shorts1.mp4",
      channelImgs:"./image/c4.png",
      channelName:"Shots",
      tag:"Ye Hum Kya Sunn Rahe Hai 🤣 #judwaaz #sushantnishant #judwaaztv #judwaazshorts"
    
    },
    {
      id: 6,
      title: "Learn online courses free",
      views: "20k",
      videoUrl: "./image/shorts1.mp4",
      channelImgs:"./image/c5.png",
      channelName:"LafterComedy",
      tag:"Ye Hum Kya Sunn Rahe Hai 🤣 #judwaaz #sushantnishant #judwaaztv #judwaazshorts"
    
    },
  ];
  const subscriptionVideos = [
    {
      id: 1,
      title: "New video on online courses javascript java html css.",
      thumbnailUrl: "./image/t1.jpg",
      channel: "GT Hindi",
      channelImg:"./image/c2.png",
      videoUrl: "./image/shorts2.mp4",
      views: "72 ",
      duration: "2 minutes ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"
    },
    {
      id: 2,
      title: "Top ten new funny prank videos",
      thumbnailUrl: "./image/t2.png",
      channel: "Pranker",
      channelImg:"./image/c1.png",
      videoUrl: "./image/shorts2.mp4",
      views: "20k ",
      duration: "2min ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    {
      id: 3,
      title: "Listen to the new top 5 music",
      thumbnailUrl: "./image/t3.png",
      channel: "Top music",
      channelImg:"./image/c3.png",
      videoUrl: "./image/shorts2.mp4",
      views: "20k ",
      duration: "2min ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    {
      id: 4,
      title: "How to Make mutton biriyani",
      thumbnailUrl: "./image/t4.png",
      channel: "Foodies",
      channelImg:"./image/c4.png",
      videoUrl: "./image/food.mp4",
      views: "20k ",
      duration: "2min ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    {
      id: 5,
      title: "this is new video",
      thumbnailUrl: "./image/t1.jpg",
      channel: "Business Education",
      channelImg:"./image/c1.png",
      videoUrl: "./image/food.mp4",
      views: "1m ",
      duration: "2week ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    {
      id: 6,
      title: "top ten new funny prank",
      thumbnailUrl: "./image/t2.png",
      channel: "Pranker",
      channelImg:"./image/c2.png",
      videoUrl: "./image/food.mp4",
      views: "20k ",
      duration: "2min ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    {
      id: 7,
      title: "top ten new funny prank",
      thumbnailUrl: "./image/t3.png",
      channel: "Top music",
      channelImg:"./image/c3.png",
      videoUrl: "./image/food.mp4",
      views: "20k ",
      duration: "2min ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    {
      id: 8,
      title: "top ten new funny prank",
      thumbnailUrl: "./image/t4.png",
      channel: "Foodies",
      channelImg:"./image/c4.png",
      videoUrl: "./image/food.mp4",
      views: "20k ",
      duration: "2min ago",
      des:"Subscribe for more content Vlogging Channel: https://youtu.be/S-g1TlZvpQo FACEBOOK: https://m.facebook.com/profile.php?id=505938329790878&ref=content_filter INSTAGRAM:"

    },
    // Add more video objects here...
  ];


  return (
    <VideoContext.Provider value={videoData}>
      <ShortsContext.Provider value={shortVideoData}>
        <SubscriptionContext.Provider value={subscriptionVideos}>
        {children}
        </SubscriptionContext.Provider>
      </ShortsContext.Provider>
    </VideoContext.Provider>
  );
};

export default VideoProvider;
export { VideoContext, ShortsContext, SubscriptionContext };
