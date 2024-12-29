import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav
      className={`fixed w-full bg-yellow-50 text-gray-800 shadow-lg transition-all duration-300  z-50 ${
        isOpen ? "border-b-[4px] border-yellow-400" : "border-b-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold hover:scale-110 transition-transform"
          >
            Mauqah
          </Link>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {/* Projects Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              // onClick={toggleDropdown}
            >
              <button className="font-semibold flex items-center space-x-2 text-gray-800 ">
                <span>Projects</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full  bg-white text-gray-800 rounded shadow-xl mt-2 transition-all duration-300 ${
                  isDropdownOpen
                    ? "opacity-100 max-h-screen"
                    : "opacity-0 max-h-0"
                } overflow-hidden`}
              >
                <Link
                  to={`/#hunza`}
                  className="block px-4 py-2 hover:bg-yellow-100 "
                >
                  Hunza Project
                </Link>
                {[
                  "Wazirabad Field Study",
                  "Visit to Jajja",
                  "Gender Empowerment Society",
                ].map((project, index) => (
                  <Link
                    key={index}
                    to={`/${project.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 hover:bg-yellow-100 "
                  >
                    {project}
                  </Link>
                ))}
              </div>
            </div>

            {/* About and Resources */}
            <Link
              to="/about"
              className="font-semibold text-gray-800 hover:text-yellow-600 transition-all group relative"
            >
              <span>About</span>
              <div className="absolute text-gray-800 left-0 bottom-0 w-0 h-0.5 bg-yellow-600 transition-all group-hover:w-full"></div>
            </Link>
            <Link
              to="/resources"
              className="font-semibold text-gray-800 hover:text-yellow-600 transition-all group relative"
            >
              <span>Resources</span>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 text-white bg-yellow-600 transition-all group-hover:w-full"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } text-gray-800 overflow-hidden transition-all duration-500 bg-yellow-50 md:hidden`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {/* Projects Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between font-semibold w-full px-4 py-2 bg-yellow-300 rounded text-white"
            >
              <span>Projects</span>
              <FaChevronDown
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`mt-2 transition-all duration-300 ${
                isDropdownOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {[
                "Wazirabad Field Study",
                "Visit to Jajja",
                "Gender Empowerment Society",
              ].map((project, index) => (
                <Link
                  key={index}
                  to={`/${project.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsDropdownOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-yellow-50 hover:text-white"
                >
                  {project}
                </Link>
              ))}
              <Link
                to={`/#hunza`}
                onClick={() => {
                  setIsOpen(false);
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 hover:bg-yellow-100 "
              >
                Hunza Project
              </Link>
            </div>
          </div>

          {/* About and Resources */}
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block font-semibold hover:bg-yellow-200 px-4 py-2 rounded"
          >
            About
          </Link>
          <Link
            to="/resources"
            onClick={() => setIsOpen(false)}
            className="block font-semibold hover:bg-yellow-200 px-4 py-2 rounded"
          >
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
