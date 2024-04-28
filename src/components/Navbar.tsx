/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';


const Navbar: React.FC = () => { 
 return (
    <div className="bg-white flex p-4 pt-10 w-full rounded-tr-3xl radius-2 rounded-tl-3xl justify-between items-center pb-8">
      {/* Left side with search input */}
      <div className="flex items-center">
        <form action="Html" className='flex items-center ml-52'>
          <div className="relative w-full -ml-52">
            <input 
              className="flex-grow bg-gray-100 rounded-lg p-2 pl-10 ml-1 pr-56" type="text" placeholder="Search..." />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 text-2xl cursor-pointer" />
          </div>
        </form>
      </div>

      {/* Middle with menu texts */}
      <div className="flex space-x-10 mr-52">
        <a href="#" className="text-black">Feedback</a>
        <a href="#" className="text-black">Contact</a>
        <a href="#" className="text-black">Help</a>
      </div>

      {/* Right side with Bell and User icons */}
      <div className="flex items-center mr-8">
        <FaBell className="text-gray-500 text-2xl mr-4" />
        <FaUser className="text-gray-500 text-2xl" />
      </div>
    </div>
 );
};

export default Navbar;
