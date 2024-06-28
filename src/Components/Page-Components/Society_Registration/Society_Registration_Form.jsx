import React from "react";
import Form_Helper from "./FormHelper";

const Society_Registration_Form = () => {
    return (
        <>

            <div className="relative w-full mx-auto mt-10 ">
                <img className="h-80 w-full blur-sm " src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="BPIT img" />
                <div className="absolute inset-0  opacity-100">
                    <div className="absolute inset-0 flex items-center justify-center ml-15">
                        <h2 className="text-white font-bold text-4xl">Register new society</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center  mt-20">
                <div className=" relative w-full max-w-7xl  bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Society's Information</h2>
                    <form className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5">

                        <Form_Helper label_name="Society's Name" id="society_name" />

                        <div>
                            <label htmlFor="society_category" className="block text-md font-medium text-gray-700">Category</label>
                            <select id="society_category" name="category" className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm sm:text-sm" required>

                                <option value="Tech">Tech</option>
                                <option value="Non Tech">Non Tech</option>
                            </select>
                        </div>

                        <div className=" row-span-4 lg:col-span-1 lg:col-start-3 ">
                            <label htmlFor="society_description" className="block text-md font-medium text-gray-700">Society's Description</label>
                            <textarea id="society_description" name="description" className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm sm:text-sm" placeholder="Enter society's description" rows={14} required></textarea>
                        </div>

                        <Form_Helper label_name="Full Name" id="full_name" />
                        <Form_Helper label_name="Enrollment Number" id="enrollment_number" />
                        <Form_Helper label_name="Branch" id="branch" />
                        <Form_Helper label_name="Section" id="section" />
                        <Form_Helper label_name="Email ID" id="email" type="email" />
                        <Form_Helper label_name="Phone number" id="phone_number" type="tel" />

                        <div className="md:col-span-3 flex justify-center pb-2">
                            <button type="submit" className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg" onClick={(e) => { e.preventDefault() }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Society_Registration_Form;