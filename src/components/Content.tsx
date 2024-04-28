import React from 'react';
import BarChartCard from './charts/BarChartCard';
import ChartCard from './charts/ChartCard';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressBar from './charts/CircularProgressBar';

const Content: React.FC = () => {
  return (
    <div className="flex w-full h-full overflow-auto z-10 rounded-br-3xl">
      <div className="flex-grow BarChart ml-5 mb-7 rounded-xl" style={{ flexBasis: '70%' }}>
        {/* Import and use BarChart Card component here */}
        <div className="flex justify-between relative">
          <ChartCard title="VISITORS" value={10320} />
          <ChartCard title="CUSTOMERS" value={4628} />
          <ChartCard title="ORDERS" value={2980} />
        </div>
        <BarChartCard />
      </div>
      <div className="flex-grow PieChart mr-7 ml-5 mb-7  rounded-xl" style={{ flexBasis: '30%', backgroundColor: '#F5F5FC' }}>
        {/* Import and use PieChart Card component here */}
        <CircularProgressBar progress={38} />

      </div>
    </div>
  );
};

export default Content;
