// components/Accordion.tsx
'use client';
import { useState } from 'react';

const Accordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'location' | 'industry'>('location');

  const locationItems: string[] = [
    'New York',
    'San Francisco',
    'Los Angeles',
    // Add more locations as needed
  ];

  const industryItems: string[] = [
    'Accounting',
    'Agriculture',
    'Arts',
    'Automotive',
    'Catering',
    'Distribution',
    'Driving',
    'Education',
    'Electronics',
    'Engineering',
    'Financial Services',
  ];

  return (
    <div className="bg-blue-900 text-white p-4">
      <div className="flex border-b border-gray-500">
        <button
          className={`p-2 ${activeTab === 'location' ? 'bg-blue-700' : ''}`}
          onClick={() => setActiveTab('location')}
        >
          Jobs by Location
        </button>
        <button
          className={`p-2 ${activeTab === 'industry' ? 'bg-blue-700' : ''}`}
          onClick={() => setActiveTab('industry')}
        >
          Jobs by Industry
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'location' ? (
          <ul>
            {locationItems.map((item, index) => (
              <li key={index} className="py-1">{item}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {industryItems.map((item, index) => (
              <li key={index} className="py-1 flex justify-between">
                {item}
                {index === industryItems.length - 1 && <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs">384</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Accordion;