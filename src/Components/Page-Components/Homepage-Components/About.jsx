import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg  w-9/12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            ABHIGYAN Alumni Network
          </h1>
          <p className="text-gray-700 mb-8">
            Welcome to the ABHIGYAN Alumni Network! Our dedicated platform aims
            to maintain connections among graduates, celebrate their
            achievements, and foster networking opportunities. Whether you're
            looking to reconnect with old friends, seek mentorship, or explore
            new career prospects, our alumni network is here to support you
            every step of the way.
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={() => alert("Overview section")}
          >
            Overview
          </button>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mb-8">
            In view of the national and international scenario of the growing
            demand of qualified technical personnel in different streams of
            engineering technology and management, Bhartiya Brahmin Charitable
            Trust in 2005 laid the foundation of Bhagwan Parshuram Institute of
            Technology (BPIT). BPIT is approved by the Ministry of Human
            Resource Development, Government of India, and the Directorate of
            Training and Technical Education, Government of National Capital
            Territory, Delhi. It is affiliated to Guru Gobind Singh Indraprastha
            University, Delhi, and offers courses of Bachelor of Technology
            (B.Tech) and Master of Business Administration (MBA), which are
            approved by the All India Council of Technical Education (AICTE).
            BPIT also offers a three years full-time Bachelor of Business
            Administration program to set the foundation for future managers.
            The admission is through Common Entrance Test conducted by GGSIP
            University.
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={() => alert("About Us section")}
          >
            About Us
          </button>
        </header>
      </div>
    </div>
  );
}

export default About;
