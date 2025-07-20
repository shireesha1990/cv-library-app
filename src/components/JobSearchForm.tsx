'use client';

import React, { useState } from 'react';
import styles from '../styles/search.module.css';

// const searchIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.139" viewBox="0 0 17 17.139"><defs><style>.a{fill:#fff;}</style></defs><g transform="translate(0 0)">
//     <path className="a" d="M59.6,64.959l4.773,4.625a1.183,1.183,0,0,0,1.638.057l.5-.486a1.1,1.1,0,0,0-.061-1.592l-3.611-3.518,0,0L61.7,62.95" transform="translate(-49.817 -52.804)"/>
//     <path className="a" d="M34.335,26.763a6.752,6.752,0,1,0,0,9.549A6.71,6.71,0,0,0,34.335,26.763Zm-1.769,7.78a4.252,4.252,0,1,1,1.244-3A4.223,4.223,0,0,1,32.566,34.543Z" transform="translate(-22.812 -24.786)"/></g></svg>
// );

export default function JobSearchForm() {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('10 miles');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search:', { keywords, location, distance });
  };

  return (
    <div className={styles.search_section}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">
            Keywords / Job Title / Job Ref
          </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. Sales Executive"
            className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Town or postcode"
              className="w-full border border-gray-300"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Distance
            </label>
            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="5 miles">5 miles</option>
              <option value="10 miles">10 miles</option>
              <option value="15 miles">15 miles</option>
              <option value="25 miles">25 miles</option>
              <option value="50 miles">50 miles</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.find_job_btn}>
          <button
            type="submit"
            className="text-white font-bold py-2 px-8 border-radius"
          >
            Find jobs now 
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.139" fill="#ffffff" viewBox="0 0 17 17.139"><defs></defs><g transform="translate(0 0)">
            <path className="a" d="M59.6,64.959l4.773,4.625a1.183,1.183,0,0,0,1.638.057l.5-.486a1.1,1.1,0,0,0-.061-1.592l-3.611-3.518,0,0L61.7,62.95" transform="translate(-49.817 -52.804)"/>
            <path className="a" d="M34.335,26.763a6.752,6.752,0,1,0,0,9.549A6.71,6.71,0,0,0,34.335,26.763Zm-1.769,7.78a4.252,4.252,0,1,1,1.244-3A4.223,4.223,0,0,1,32.566,34.543Z" transform="translate(-22.812 -24.786)"/></g></svg>
          </button>
        </div>
      </form>
    </div>
  );
}