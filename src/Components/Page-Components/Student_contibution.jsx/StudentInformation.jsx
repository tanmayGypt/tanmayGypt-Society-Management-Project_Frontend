import React from 'react'
import bpitmain from '../../../assets/bpitmain.jpeg'
import Contri from './Contri'


const StudentInformation = () => {
  return (
    <div>

        <div className="relative w-full mx-auto my-10">
                <img
                    className="h-44 w-full "
                    src={bpitmain}
                    alt="BPIT img"
                />
                <div className="absolute inset-0  opacity-100">
                    <div className="absolute inset-0 flex items-center  ml-15">
                        <h2 className="text-white font-bold text-4xl p-5">
                           Student&apos;s Information
                        </h2>
                    </div>
                </div>
            </div>

        <div>
          <div className="relative w-4/5 mx-auto my-10 bg-sky-100 flex flex-col md:flex-row rounded-xl shadow-md p-5 gap-10">
          <div className='bg-white rounded-2xl shadow-2xl shadow-slate-500 px-8 py-1 mt-2 md:h-80 h:66 sm:h-52 flex flex-col sm:flex-row md:flex-col justify-start items-center w-full md:w-3/6 '>
              <img src="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile" className='rounded-full h-36 w-36 outline outline-slate-200 outline-4 outline-offset-0 m-2 my-3'/>
            <div className='mx-3 md:mx-0'>
              <p className='text-xl mt-3 font-medium'>Name of the Student</p>
              <p className='text-xl font-medium mt-5 mb-10'>Other details</p>
            </div>
          </div>
          <div>
          <div className='flex items-end'>
            <label htmlFor="society" className='text-xl font-medium'>Society</label>
            <select name="society" id="society" className='mt-1 mx-5 w-2/5 p-1 px-2 border border-gray-600 text-sm'>
              <option value="">Select Society...</option>
              <option value="Namespace">Namespace</option>
              <option value="Anveshan">Anveshan</option>
              <option value="Drishti">Drishti</option>
              <option value="Wibd">Wibd</option>
              <option value="Namespace">Namespace</option>
              <option value="Namespace">Namespace</option>
            </select>
            </div>
            <div className='mt-3 flex flex-col sm:flex-row gap-2.5'>
              <Contri heading="Contributions"/>
              <Contri heading="Achievements"/>
            </div>
          </div>
          </div>
        </div>
       
    </div>
  )
}

export default StudentInformation
