import React from "react";

const Video = () => {
  return (
    <div className=" ">
      <div className="w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="/83c745cf.mp4"
        />
      </div>
      
    </div>
  );
};

export default Video;
