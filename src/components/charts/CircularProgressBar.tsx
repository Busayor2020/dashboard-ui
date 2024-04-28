// CircularProgressBar.tsx
import React from 'react';

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress }) => {
  const radius = 75; // Outer circle radius
  const stroke = 2; // Stroke width
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex justify-center items-center mt-8">
      <svg height={radius * 2} width={radius * 2}>
        {/* Outer background circle */}
        <circle
          stroke="white"
          fill="white"
          strokeWidth={stroke}
          r={radius}
          cx={radius}
          cy={radius}
        />
        {/* Inner circle with glass morphism effect */}
        <circle
          fill="white"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          style={{ filter: 'blur(20px)', opacity: '0.7' }} // Enhanced glass morphism effect
        />
        {/* Gradient for the progress stroke */}
        <defs>
          <linearGradient id="progressGradient" x1="2%" y1="0%" x2="100%" y2="0%">
            <stop offset="100%" style={{ stopColor: 'blue' }} />
            <stop offset="0%" style={{ stopColor: 'rgba(0, 123, 255, 0.01)' }} />
          </linearGradient>
        </defs>
        {/* Progress stroke with gradient */}
        <circle
          stroke="url(#progressGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, strokeLinecap: 'butt' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Circle at the end of the stroke */}
        <circle
          fill="blue"
          cx={radius + normalizedRadius * Math.cos(2 * Math.PI * progress / 100)}
          cy={radius + normalizedRadius * Math.sin(2 * Math.PI * progress / 100)}
          r={stroke * 4} // Larger circle at the end of the stroke
        />
        {/* Percentage text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="blue"
          fontWeight="bold" // Bolder font weight
          fontSize="20"
          dy=".3em"
        >
          {`${progress}%`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
