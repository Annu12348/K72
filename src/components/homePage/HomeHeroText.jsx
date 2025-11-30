import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="text-3xl  font-[font300] mt-2 uppercase text-center tracking-tight leading-none ">
      <div className="text-[9vw] text-white ">L'étincelle</div>
      <div className="text-[9vw] flex justify-center -mt-2 items-center   text-white ">
        qui
        <div className="w-[15vw] h-[14vh] -mt-2 rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9vw] text-white ">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
