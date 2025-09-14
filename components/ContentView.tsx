import React from 'react';
import type { DayData } from '../types';
import Card from './Card';
import CurrentAngelView from './CurrentAngelView';

interface ContentViewProps {
  title: string;
  data: DayData | any | null;
  isDayData: boolean;
}

const ListCard: React.FC<{ title: string; items: string[] | undefined }> = ({ title, items }) => {
  if (!items || items.length === 0) return null;
  return (
    <Card title={title}>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

const ContentView: React.FC<ContentViewProps> = ({ title, data, isDayData }) => {
  if (!data) {
    return <div className="text-center p-10 font-cinzel text-xl text-amber-200">Select a section to begin.</div>;
  }
  
  if (isDayData) {
    const dayData = data as DayData;
    return (
      <div>
        <h2 className="text-4xl font-bold text-amber-300 font-cinzel mb-6 pb-2 border-b-2 border-amber-400/30">{dayData.day}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title={`Angel of ${dayData.day}`}>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 flex-shrink-0">{dayData.angel.sigil}</div>
              <div>
                <p className="text-xl font-bold text-white">{dayData.angel.name}</p>
                {dayData.angel.planet && <p className="text-sm text-gray-400">Planet: {dayData.angel.planet}</p>}
                {dayData.angel.heaven && <p className="text-sm text-gray-400">Heaven: {dayData.angel.heaven}</p>}
              </div>
            </div>
          </Card>
          <Card title="Perfume"><p>{dayData.perfume}</p></Card>
          <ListCard title="Angels of the Day" items={dayData.angelsOfDay} />
          <Card title="Angels of the Air">
            <p><span className="font-bold">King:</span> {dayData.angelsOfAir.king}</p>
            <p><span className="font-bold">Ministers:</span> {dayData.angelsOfAir.ministers.join(', ')}</p>
            <p className="mt-2 text-sm text-gray-400">Under the {dayData.wind}.</p>
          </Card>
          {dayData.angelsOfHeaven && (
            <div className="md:col-span-2">
            <Card title="Angels of the Heaven">
              <div className="grid grid-cols-2 gap-4">
                <ListCard title="East" items={dayData.angelsOfHeaven.east} />
                <ListCard title="West" items={dayData.angelsOfHeaven.west} />
                <ListCard title="North" items={dayData.angelsOfHeaven.north} />
                <ListCard title="South" items={dayData.angelsOfHeaven.south} />
              </div>
            </Card>
            </div>
          )}
          <Card title="Nature of the Spirits" fullWidth={true}>
              <p className="whitespace-pre-wrap leading-relaxed">{dayData.nature}</p>
          </Card>
          <Card title="Conjuration" fullWidth={true}>
            <p className="whitespace-pre-wrap italic leading-relaxed text-amber-100/90">{dayData.conjuration}</p>
          </Card>
        </div>
      </div>
    );
  }

  // Handle Current Angel
  if (title === "Current Angel") {
    return (
      <div>
        <h2 className="text-4xl font-bold text-amber-300 font-cinzel mb-6 pb-2 border-b-2 border-amber-400/30">{title}</h2>
        <CurrentAngelView hourlyAngelsData={data} />
       </div>
    );
  }

  // Handle general info
  if (typeof data === 'string' || Array.isArray(data)) {
     return (
        <div>
          <h2 className="text-4xl font-bold text-amber-300 font-cinzel mb-6 pb-2 border-b-2 border-amber-400/30">{title}</h2>
          <Card title="">
             {Array.isArray(data) ? data.map((p, i) => <p key={i} className="mb-4 whitespace-pre-wrap leading-relaxed">{p}</p>) : <p className="whitespace-pre-wrap leading-relaxed">{data}</p>}
          </Card>
        </div>
      );
  }

  return <div>Content could not be displayed.</div>;
};

export default ContentView;