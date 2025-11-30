import React from "react";

const Agence = () => {
  return (
    <div>
    <div>
      <div className="w-[16%]  fixed  h-[50vh]  top-[10%] rounded-lg  left-[30%] overflow-hidden ">
        <img
          className="w-full h-full object-cover "
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
        />
      </div>
      <div className=" z-20 relative ">
        <div className="text-[20vw]  text-center font-[font500] tracking-tigh leading-[16.5vw] mt-[59vh] uppercase ">
          Soixan7e
          <br /> Douze
        </div>
        <div className="w-full text-5xl  font-[font500] flex items-center justify-end">
          <p className="w-[60%] ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
            curiosité nourrit notre créativité. On reste humbles et on dit non
            aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques aux gros egos influentes.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full h-screen relative bg-amber-100 "></div>
    </div>
  );
};

export default Agence;
