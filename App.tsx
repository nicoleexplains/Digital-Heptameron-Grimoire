
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import ContentView from './components/ContentView';
import AskGrimoire from './components/AskGrimoire';
import { grimoireData, generalInfo, hourlyAngels } from './data/grimoireData';
import type { DayData, GeneralInfoKey } from './types';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>(SECTIONS[0]);

  const currentData = useMemo(() => {
    if (generalInfo.hasOwnProperty(selectedSection)) {
      return generalInfo[selectedSection as GeneralInfoKey].content;
    }
    if (selectedSection === 'Hourly Angels') {
        return hourlyAngels;
    }
    return grimoireData.find(d => d.day === selectedSection) || null;
  }, [selectedSection]);

  const isDayData = (data: any): data is DayData => {
    return data && data.hasOwnProperty('day');
  };

  return (
    <div className="flex h-screen bg-gray-900 font-sans">
      <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-800/50" style={{ backgroundImage: 'radial-gradient(circle, #1f2937, #111827)' }}>
        <div className="max-w-4xl mx-auto">
          <ContentView
            title={selectedSection}
            data={currentData}
            isDayData={isDayData(currentData)}
          />
        </div>
      </main>
      <AskGrimoire />
    </div>
  );
};

export default App;
