import React, { useEffect, useState } from "react";

const Searchpage = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = "AIzaSyBS90WDP-IHF_N2Oq289yH5vol6fZZJOjA"; // Replace with your YouTube Data API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,contentDetails,statistics,status&chart=mostPopular&maxResults=10`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // Add showFullDescription property to each video
        const videosWithDescription = data.items.map(video => ({ ...video, showFullDescription: false }));
        setVideos(videosWithDescription);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey]);

  const toggleDescription = (index) => {
    const updatedVideos = [...videos];
    updatedVideos[index].showFullDescription = !updatedVideos[index].showFullDescription;
    setVideos(updatedVideos);
  };

  if (videos.length === 0) {
    return <div>Loading...</div>;
  }

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000 && viewCount < 1000000) {
      return `${(viewCount / 1000).toFixed(1)}k`;
    } else if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1)}M`;
    }
    return viewCount;
  };

  return (
    <div className="grid">
      <h3>Popular Videos</h3>
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="border-b flex items-center justify-start px-4 py-2 "
        >
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.snippet.title}
            allowFullScreen
          ></iframe>
          <div className="flex items-start justify-center flex-col px-2">
            <h5 className="text-white">{video.snippet.title}</h5>
            <p className="text-white">Views: {formatViewCount(video.statistics.viewCount)}</p>
            <div className="flex items-center justify-center gap-2">
            
            <img
              src={video.snippet.thumbnails.default.url}
              alt="Channel Logo"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <h3 className="text-white">{video.snippet.channelTitle}</h3>
            </div>

            <div>
            <span className="text-white text-sm">
              {video.snippet.description.length > 200 &&
              !video.showFullDescription
                ? `${video.snippet.description.slice(0, 200)}...`
                : video.snippet.description
              }
            </span>
            {video.snippet.description.length >200 && (
              <span className="text-white" onClick={() => toggleDescription(index)}>
                {video.showFullDescription ? 'Less' : 'More'}
              </span>
            )}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchpage;
