import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './main.css';

const App: React.FC = () => {
 return (
  <div className='bg-blue-200 p-8 h-screen flex overflow-y-scroll overflow-x-hidden'>
    <SideBar />
    <div className="flex flex-col w-full bg-white rounded-r-3xl radius-1 rounded-l-3xl -ml-14 z-10 pl-7 pr-7">
      <Navbar />
      <Content />
    </div>
  </div>
 );
};

export default App;