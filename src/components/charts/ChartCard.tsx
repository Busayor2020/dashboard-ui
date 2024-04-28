import React from 'react';


interface ChartCardProps {
  title: string;
  value: number;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, value }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-red-500 transition-colors duration-300 flex justify-between items-center"
         style={{ width: 'calc(33.333% - 1rem)', height: '100px' }}>
      {/* Use the Line component to render your chart */}
      <div className="w-1/2 h-full ChartData">
      
      </div>
      {/* Text and number on the right side */}
      <div className="w-1/2 h-full flex flex-col justify-between p-4">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xl font-bold">{value.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ChartCard;
