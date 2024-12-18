import { faPlay } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" absolute pt-[25%] px-12 z-10 w-full aspect-video bg-gradient-to-r from-black">
      <div className="text-4xl font-bold text-white">{title}</div>
      <div className="py-4 w-1/4 text-white">{overview}</div>
      <button className="p-4 px-12 bg-white font-semibold mr-8 rounded-lg hover:opacity-70">
        <FontAwesomeIcon icon={faPlay}  className="pr-1"/>
        <span>Play</span>
      </button>
      <button className="p-4 px-12 bg-[rgba(109, 109, 110, 0.7)] font-semibold rounded-lg text-white hover:opacity-70">
        More Info
      </button>
    </div>
  );
}

export default VideoTitle;
