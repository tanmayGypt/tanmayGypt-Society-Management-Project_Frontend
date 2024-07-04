import { useState } from "react";

const Student_Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('')
        setPassword('')
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
                            Student Login
                        </h2>
                    </div>
                </div>
            </div>

            <div className="max-w-md mt-20 mx-auto border border-indigo-500 border-lg border-4 shadow-md">
                <form onSubmit={handleSubmit} className="p-4" >
                    <h2 className="text-center text-4xl text-bold">Login Back To Your Account</h2>

                    <div className="flex flex-col mt-10 mb-4">
                        <label htmlFor="username" className="block text-md font-medium">
                            Username
                        </label>
                        <input
                            type="text" id="username" name="username"
                            className="w-full border border-md border-gray-800 px-3 py-2 mt-1 "
                            value={username} onChange={(e) => { setUsername(e.target.value) }}
                            required
                        />
                    </div>

                    <div className="flex flex-col  mb-4">
                        <label htmlFor="password" className="block text-md font-medium">
                            Password
                        </label>
                        <input
                            type="password" id="password" name="password"
                            className="w-full border border-md border-gray-800 px-3 py-2 mt-1 "
                            value={password} onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />
                    </div>

                    <div className="pb-2">
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}


export default Student_Login;