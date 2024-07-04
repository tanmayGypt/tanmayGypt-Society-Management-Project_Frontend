// import React from "react";

const Student_Registration_form = () => {
  return (
    <div className="relative w-11/12 max-w-5xl  bg-white shadow-md rounded-lg mx-auto mt-20 pt-2">

      <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-3  p-5 gap-5 sm:gap-10 place-content-around bg-black">
        <li>
          <label
            htmlFor="studentname"
            className="text-sm sm:text-lg font-medium md:text-md text-red-700 "
          >
          Enter Name of the student
          </label>
          <input
            type="text"
            name="studentname"
            id="studentname"
            placeholder="Enter Full Name..."
            className="mt-1 mx-5 p-1 px-2 block w-4/6 border border-gray-600 rounded-md shadow-sm text-sm "
          />
        </li>

        <li>
          <label
            htmlFor="studentnumber"
             className="text-sm sm:text-lg font-medium md:text-md text-red-700"
          >
            Enrollment Number
          </label>
          <input
            type="text"
            name="studentnumber"
            id="studentnumber"
            placeholder="Enter Enrollment No..."
              className="mt-1 mx-5 p-1 px-2 block w-4/6 border border-gray-600 rounded-md shadow-sm text-sm "
          />
        </li>

        <li>
          <label
            htmlFor="studentbatch"
            className="text-sm sm:text-lg font-medium md:text-md  text-red-700"
            
          >
            Batch
          </label>
          <select
                id="studentbatch"
                name="Studentbatch"
                placeholder="Select Branch..."
                 className="mt-1 mx-5  p-1 px-2 block w-4/6 border border-gray-600 rounded-md shadow-sm text-sm"
                required
              >
                <option value="">Select Branch...</option>
                <option value="2022-2026">2022-2026</option>
                <option value="2023-2027">2023-2027</option>
                <option value="2024-2028">2024-2028</option>
              </select>
            </li>
        
        </ul>

        <div className="flex justify-center p bg-gray-600">
              <button
                type="submit"
                className="m-4 bg-black text-white font-bold py-1 px-5 rounded-3xl w-32 hover:bg-slate-400"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Submit
              </button>
            </div>
      
    </div>
  );
};

export default Student_Registration_form;
