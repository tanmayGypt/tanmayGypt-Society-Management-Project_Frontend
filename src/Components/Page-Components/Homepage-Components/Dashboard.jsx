// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import bpit from "../../../assets/bpit.jpeg";
import women from "../../../assets/assets/women.jpg";
import aavaaran from "../../../assets/assets/aavaaran.jpg";
import chromavita from "../../../assets/assets/chromavita.jpg";
import def from "../../../assets/assets/def.jpg";
import electro from "../../../assets/assets/electro.jpg";
import ieee from "../../../assets/assets/ieee.jpg";
// import ios from "../../../assets/assets/ios.jpg";
import kalam from "../../../assets/assets/kalam.jpg";
import maverics from "../../../assets/assets/maverics.jpg";
import no4 from "../../../assets/assets/no4.jpg";
import no6 from "../../../assets/assets/no6.jpg";
import nscc from "../../../assets/assets/nscc.jpg";
import octve from "../../../assets/assets/octve.jpg";
import opti from "../../../assets/assets/opti.jpg";
import pamache from "../../../assets/assets/pamache.jpg";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full h-[20vh]  p-3 pt-6  ">
        <img
          src={bpit}
          alt="BPIT"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      <div className="flex gap-6 container  pt-6">
        <img
          src={women}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />

        <img
          src={electro}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={no6}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={no4}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={ieee}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={def}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={nscc}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-grey-700"
        />
      </div>

      <div className="flex gap-6 container  pt-6">
        <img
          src={aavaaran}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />

        <img
          src={chromavita}
          alt=""
          className="w-full h-44 object-cover  shadow-xl shadow-gray-700"
        />
        <img
          src={kalam}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={maverics}
          alt=""
          className="w-full h-44 object-covershadow-xl shadow-gray-700"
        />
        <img
          src={opti}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={octve}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
        <img
          src={pamache}
          alt=""
          className="w-full h-44 object-cover shadow-xl shadow-gray-700"
        />
      </div>

      <div className="flex   pt-9">
        <Link
          to="/Student_Registration"
          className=" bg-blue-900 hover:bg-purple-700 text-white font-bold mx-36 py-2 px-8 w-80 h-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 sm:w-auto"
        >
          Register new Society
        </Link>
        <Link
          to="/Existing_Societies"
          className=" bg-blue-500 hover:bg-purple-700 text-white font-bold mx-32 py-2 px-6 w-80 h-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 sm:w-auto "
        >
          View Existing Society
        </Link>
      </div>

      <div className="p-9 flex">
        <button className=" bg-red-600 hover:bg-purple-700 text-white font-bold  py-2 px-6 mx-80 w-96 h-12 rounded-lg shadow-lg transition sm:w-auto duration-300 ease-in-out transform hover:scale-105 ">
          Send message to any Society
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
