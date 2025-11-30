import React from "react";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="w-full h-[41vh]   ">
      <div className="w-full  text-white font-semibold text-md px-4 flex flex-col items-end">
        <p className="text-right w-[22%]  tracking-tight  ">
          K72 est une agence qui pense
        </p>
        <p className="text-left w-[21.5%]  tracking-tight ">
          chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5
          ans. On cherche la friction qui crée l’étincelle pour générer de
          l’émotion. Pour assurer une relation honnête,
        </p>
        <p className="text-left w-[21.5%]  tracking-tight ">
          on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit
          être fait.
        </p>
      </div>
      <div className="w-full  h-[14vh]  mb-0  flex items-end justify-start">
        <div className="flex items-center text-white font-semibold gap-3">
          <span className="text-3xl text-white">
            <CiGlobe />
          </span>
          <h1 className="text-xl">MONTREAL_09:58:09</h1>
        </div>
        <div className="flex gap-4">
        <Link to='/travail' className="text-8xl hover:border-[#D3FD50] hover:text-[#D3FD50] leading-none tracking-tight uppercase text-white font-semibold border-1 rounded-full px-14  ">project</Link>
        <Link to='/agence' className="text-8xl uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] leading-none tracking-tight text-white font-semibold border-1 rounded-full px-14 ">agence</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomText;
