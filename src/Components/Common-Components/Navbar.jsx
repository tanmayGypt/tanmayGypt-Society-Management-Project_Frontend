import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white fixed w-full  z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 navbar-items">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
          className="h-10 navbar-img"
          alt="BPIT Logo"
        />

        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 nav-link hover:text-purple-800 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900  md:border-0  md:p-0 nav-link hover:text-purple-800 hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 md:border-0  md:p-0 nav-link hover:text-purple-800 hover:underline"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 md:border-0  md:p-0 nav-link hover:text-purple-800 hover:underline"
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gray-200 text-purple-600 px-4 py-2 rounded "
              >
                Login/Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
