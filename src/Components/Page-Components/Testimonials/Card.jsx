import React from "react";
import user_icon from "../../../assets/user_icon.jpg"

const Card = ({ testinomial }) => {
    return (
        <>
            <div className="relative bg-white p-6 rounded-md shadow-md max-w-sm w-full mx-auto max-h-72 overflow-y-auto ">
                <div className="flex  items-center mb-4">
                    <img src={user_icon} alt="user_icon" className="h-14 w-13 "
                    />

                    <div className="ml-8">
                        <h3 className="text-xl font-semibold">{testinomial.name}</h3>
                        <p className="text-gray-600">{testinomial.degree}</p>
                        <p className="text-gray-600">{testinomial.batch}</p>
                    </div>
                </div>
                <p className="text-gray-700">{testinomial.content}</p>
            </div>
        </>
    )
}

export default Card;