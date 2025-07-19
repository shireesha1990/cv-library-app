'use client';

import React, { useState } from 'react';
import styles from '../styles/search.module.css';

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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Keywords / Job Title / Job Ref
          </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. Sales Executive"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location and Distance Row */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Town or postcode"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-32">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Distance
            </label>
            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="text-white font-bold py-2 px-8"
          >
            Find jobs now 
          </button>
        </div>
      </form>
    </div>
  );
}