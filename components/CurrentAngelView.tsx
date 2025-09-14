import React, { useState, useEffect } from 'react';
import type { HourlyAngel } from '../types';
import Card from './Card';

interface CurrentAngelViewProps {
  hourlyAngelsData: HourlyAngel[];
}

const CurrentAngelView: React.FC<CurrentAngelViewProps> = ({ hourlyAngelsData }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const getAngelForTime = (date: Date) => {
    // This is a simplified logic. Real astrological hours are complex.
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hourOfDay = date.getHours(); // 0-23

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = dayNames[dayOfWeek];
    
    // This is a placeholder. Correctly mapping planetary hours is very complex.
    // For this demonstration, we'll find an angel based on the hour index, cycling through the list.
    const angel = hourlyAngelsData[hourOfDay % hourlyAngelsData.length];

    return {
        day: currentDay,
        angel: angel
    };
  };

  const { day, angel } = getAngelForTime(currentTime);

  return (
    <Card title="Current Ruling Angel (Simplified)">
      <p className="text-lg">
        The current time is{' '}
        <span className="font-bold text-amber-200">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>{' '}
        on a <span className="font-bold text-amber-200">{day}</span>.
      </p>
      <div className="mt-4 p-4 bg-black/30 rounded-lg">
        <p className="text-xl">Angel of the Hour: <span className="font-bold text-white">{angel.name}</span></p>
        <p className="text-md text-gray-400">Ruler: {angel.ruler}</p>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        <strong>Note:</strong> Determining the precise ruling angel is based on complex planetary hour calculations that vary with sunrise and sunset. This feature provides a simplified view using standard 24-hour time for demonstration.
      </p>
    </Card>
  );
};

export default CurrentAngelView;
