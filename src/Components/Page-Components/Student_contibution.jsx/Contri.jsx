import React from "react";


const Contri = ({heading}) => {
 
  return (
    <div>
      <h2
        className="bg-blue-800 p-2 rounded-lg text-white font-medium text-center text-xl "
      >
        {heading}
      </h2>
      <ol className=" mt-2 border h-56 border-2 border-black overflow-y-scroll px-7 py-1 list-decimal list-outside  font-semibold text-justify ">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          accusantium?
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          accusantium?
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          accusantium?
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          accusantium?
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          accusantium?
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          accusantium?
        </li>
      </ol>
    </div>
  );
};


export default Contri;
