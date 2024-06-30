import React from "react";
import bpitmain from "../assets/bpitmain.jpeg";
import Student_Registration_form from "../Components/Page-Components/Student-Registration_Component/Student_Registration_form";

const Student_Registration = () => {
  return (
    <div>
      <div>
        <img src={bpitmain} alt="bpitmain" className="w-full h-56 md:h-96" />
      </div>
      <div className="bg-sky-100 h-24 w-full justify-center flex items-center">
        <h1 className="text-lg sm:text-2xl font-medium">Students Involved in Societies</h1>
      </div>
      <div>
        <Student_Registration_form />
      </div>
    </div>
  );
};

export default Student_Registration;
