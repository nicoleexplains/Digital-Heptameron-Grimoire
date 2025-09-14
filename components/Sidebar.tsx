
import React from 'react';
import { SECTIONS } from '../constants';

interface SidebarProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedSection, setSelectedSection }) => {
  return (
    <nav className="w-64 h-full bg-gray-900/80 border-r border-amber-800/30 p-4 overflow-y-auto shadow-2xl">
      <h1 className="text-2xl font-bold text-amber-300 font-cinzel mb-6 text-center">Heptameron</h1>
      <ul>
        {SECTIONS.map(section => (
          <li key={section} className="mb-2">
            <button
              onClick={() => setSelectedSection(section)}
              className={`w-full text-left px-4 py-2 rounded-md transition-all duration-200 ease-in-out font-cinzel text-sm
                ${selectedSection === section
                  ? 'bg-amber-400/20 text-amber-200 shadow-inner'
                  : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
