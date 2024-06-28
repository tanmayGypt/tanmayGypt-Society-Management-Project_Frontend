import React from "react";

const Form_Helper = ({label_name,id,type="text"}) =>{
      return(
        <div className="col-span-1">
            <label htmlFor={id} className="block text-md font-medium text-gray-700">{label_name}</label>
            <input type={type} id={id} name={label_name} className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm sm:text-sm" placeholder={` Enter ${label_name} `} required/>
        </div>
      );
}

export default Form_Helper