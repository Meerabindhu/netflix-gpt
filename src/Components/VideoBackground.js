import React from "react";
import {useSelector } from "react-redux";
import useVideoDetails from "./hooks/useVideoDetails";

const VideoBackground = ({ movieId }) => {
  const videoArr = useSelector((store) => store.movies?.trailerVideo);
  const videoKey = videoArr?.length && videoArr[0].key;

  useVideoDetails(movieId);

  return (
    <div className="w-screen ">
      {videoKey && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoKey}?si=BMLYNi9uc0-TU6L5&autoplay=1&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
