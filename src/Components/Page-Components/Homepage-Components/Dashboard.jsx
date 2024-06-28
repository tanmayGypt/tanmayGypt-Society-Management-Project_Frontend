import bpit from "../../../assets/bpit.jpeg";
import avaran from "../../../assets/avaran.png";
import fashion from "../../../assets/fashion.png";
import mav from "../../../assets/mav.jpeg";
import namespacecomm_logo from "../../../assets/namespacecomm_logo.jpeg";
import dhris from "../../../assets/dhris.jpeg";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="mt-12">
      <div className="flex flex-col">
        <div className="w-full h-[20vh] p-3 pt-6  ">
          <img
            src={bpit}
            alt="BPIT"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        <div className="flex p-3  h-[25vh]">
          <img src={avaran} className="w-full h-full object-cover " alt="" />
          <img src={fashion} className="w-full h-full object-cover " alt="" />
          <img
            src={namespacecomm_logo}
            className="w-full h-full object-cover "
            alt=""
          />
          <img src={mav} className="w-full h-full object-cover " alt="" />
          <img src={dhris} className="w-full h-full object-cover " alt="" />
        </div>

        <div className="flex   pt-9 mx-auto">
          <Link
            to="/Society_Registration"
            className=" bg-blue-900 hover:bg-purple-700 text-white font-bold mx-36 py-2 px-8 w-80 h-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 sm:w-auto"
          >
            Register new Society
          </Link>
          <button className=" bg-blue-500 hover:bg-purple-700 text-white font-bold mx-32 py-2 px-6 w-80 h-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 sm:w-auto ">
            View Existing Society
          </button>
        </div>

        <div className="p-9 flex mx-auto">
          <button className=" bg-red-600 hover:bg-purple-700 text-white font-bold  py-2 px-6 mx-80 w-96 h-12 rounded-lg shadow-lg transition sm:w-auto duration-300 ease-in-out transform hover:scale-105 ">
            Send message to any Society
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
