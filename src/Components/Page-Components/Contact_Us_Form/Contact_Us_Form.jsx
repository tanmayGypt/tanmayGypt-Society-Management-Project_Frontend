import React, { useState } from "react";

const Contact_Us_Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

    const validateContact = (contact) => {
        const re = /^\d{10}$/;
        return re.test(contact)
    }

    const validateForm = () => {
        const newErrors = {}
        if (!validateContact(contact)) {
            newErrors.contact = "Contact number must be of 10 digits"

        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setName('')
        setContact('')
        setEmail('')
        setMessage('')
        setSubject('')
    }

    return (
        <>
            <div className="relative w-full mx-auto mt-10 ">
                <img
                    className="h-80 w-full blur-sm "
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="BPIT img"
                />
                <div className="absolute inset-0  opacity-100">
                    <div className="absolute inset-0 flex items-center justify-center ml-15">
                        <h2 className="text-white font-bold text-4xl">
                            Send Your Queries
                        </h2>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="relative w-full max-w-7xl">
                    <form onSubmit={handleSubmit}>
                        <h4 className="mb-6">Please use the form below to contact us</h4>

                        <div className="mb-4 flex flex-col md:flex-row md:items-center">
                            <label htmlFor="name" className="block text-gray-700 md:w-1/3">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text" name="name" id="name"
                                value={name} onChange={(e) => { setName(e.target.value) }}
                                className="w-full md:w-2/3 px-3 py-2 mt-1 md:mt-0 bg-gray-200"
                                required
                            />

                        </div>

                        <div className="mb-4 flex flex-col md:flex-row md:items-center">
                            <label htmlFor="email" className="block text-gray-700 md:w-1/3">
                                Personal Email ID<span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email" name="email"
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full md:w-2/3 px-3 py-2 mt-1 md:mt-0 bg-gray-200"
                                required
                            />

                        </div>

                        <div className="mb-4 flex flex-col md:flex-row md:items-center">
                            <label htmlFor="contact" className="block text-gray-700 md:w-1/3">
                                Contact No.<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="contact" id="contact"
                                value={contact} onChange={(e) => { setContact(e.target.value) }}
                                className="w-full md:w-2/3 px-3 py-2 mt-1 md:mt-0 bg-gray-200"
                                required
                            />

                        </div>

                        {errors.contact && <p className="text-red-600 text-md mt-1 mb-3 w-full md:ml-60">{errors.contact}</p>}
                        
                        <div className="mb-4 flex flex-col md:flex-row md:items-center">
                            <label htmlFor="subject" className="block text-gray-700 md:w-1/3">
                                Subject<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text" name="subject" id="subject"
                                value={subject} onChange={(e) => { setSubject(e.target.value) }}
                                className="w-full md:w-2/3 px-3 py-2 mt-1 md:mt-0 bg-gray-200"
                                required
                            />
                        </div>

                        <div className="mb-4 flex flex-col md:flex-row md:items-center">
                            <label htmlFor="message" className="block text-gray-700 md:w-1/3">
                                Subject<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message" id="message"
                                rows={5}
                                value={message} onChange={(e) => { setMessage(e.target.value) }}
                                className="w-full md:w-2/3 px-3 py-2 mt-1 md:mt-0 bg-gray-200"
                                required
                            >
                            </textarea>
                        </div>

                        <div className="pb-2">
                            <button type="submit" className=" w-full md:w-3/5 md:ml-60  py-2 bg-indigo-500 text-white font-semibold rounded">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact_Us_Form;