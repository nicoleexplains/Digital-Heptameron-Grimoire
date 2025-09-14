
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Card: React.FC<CardProps> = ({ title, children, fullWidth = false }) => {
  const cardClass = `bg-black/20 border border-amber-700/20 rounded-lg shadow-lg backdrop-blur-sm ${fullWidth ? 'md:col-span-2' : ''}`;
  
  return (
    <div className={cardClass}>
      {title && <h3 className="text-xl font-bold text-amber-200 font-cinzel p-4 border-b border-amber-700/20">{title}</h3>}
      <div className="p-4 text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default Card;
