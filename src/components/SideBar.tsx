import React from 'react';
import { FaHome, FaComment, FaBroadcastTower, FaClock } from 'react-icons/fa';

const SideBar: React.FC = () => {
 return (
    <div className="bg-blue-800 w-36 relative h-full radius-3 rounded-l-3xl flex flex-col items-center justify-center z-10 p-20">
      <FaHome className="text-white text-3xl mb-6 mr-12" />
      <FaComment className="text-white text-3xl mb-6 mr-12" />
      <FaBroadcastTower className="text-white text-3xl mb-6 mr-12" />
      <FaClock className="text-white text-3xl mr-12" />
    </div>
 );
};

export default SideBar;