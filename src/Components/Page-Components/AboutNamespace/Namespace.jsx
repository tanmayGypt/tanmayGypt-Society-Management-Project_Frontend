import React from "react";
import namespace from "../../../assets/namespacecomm_logo.jpeg";


const Namespace = () => {
  return (
    <div className="relative top-20">
   
      <div className="w-full  flex bg-violet-50  flex-wrap border border-1 border-black-200 shadow-md">
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          About
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          Events
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          Members
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700 text-xl font-medium text-center"
        >
          News
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          News
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          Gallery
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          Contacts
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          Testinomials
        </a>
        <a
          href=""
          className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
        >
          Coordinators
        </a>
        <a
          href=""
          className=" px-3 py-2 text-fuchsia-700 text-xl font-medium text-center"
        >
          Openings
        </a>
      </div>
      <div className="text-left px-5 p-4 bg-violet-50 shadow-lg mt-1 rounded-lg">
        <h1 className="text-violet-700 text-3xl font-medium tracking-wider ">
          <span className="text-zinc-950 px-5">About</span>
          nameSpace
        </h1>
      </div>


      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${namespace})` }}
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative z-10 flex flex-col sm:flex-row">
          <div className="sm:w-2/4 w-full px-5 py-16">
            <p className="text-black  tracking-wider text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, repellat ducimus. Quibusdam dolores temporibus nulla
              repellendus tenetur, magni dolorem minus quis nesciunt dolore
              blanditiis sapiente laudantium, illo numquam nam assumenda
              doloribus veritatis praesentium quasi, fugit iste? Nemo labore ut
              vitae!
            </p>
          </div>
          <div className="flex sm:flex-col sm:py-10 w-full sm:w-1/5 py-3 items-center px-10 justify-center sm:items-center gap-x-5 sm:gap-y-10">
            <button  className=" bg-violet-50 text-black  py-2 px-2 rounded-3xl w-28 text-xl font-medium shadow-lg">Vision</button>
            <button className="  bg-violet-50 text-black  py-2 px-2 rounded-3xl w-28 text-xl font-medium shadow-lg">Misson</button>
          </div>

          <div className="my-10 py-10 px-5 tracking-wider text-xl ">
            <p className="py-5 ">To transform India into a Global Developer Powerhouse.</p>
            <p>To make a peer group for the holistic development of the student</p>
            <button className="m-4 bg-violet-50 text-black font-medium py-1 px-2 rounded-3xl w-44 text-xl shadow-lg">Read More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namespace;
