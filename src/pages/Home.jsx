import React from "react";
import Video from "../components/homePage/Video";
import HomeHeroText from "../components/homePage/HomeHeroText";
import HomeBottomText from "../components/homePage/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="w-full fixed h-screen ">
        <Video />
      </div>
      <div className="w-screen h-screen relative flex items-cente justify-between flex-col ">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
