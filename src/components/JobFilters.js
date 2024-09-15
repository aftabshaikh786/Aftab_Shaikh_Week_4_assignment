import React from 'react';

const JobFilters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="job-filters">
      <select name="location" onChange={handleFilterChange}>
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
      </select>
      <select name="type" onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>
      <select name="company" onChange={handleFilterChange}>
        <option value="">All Companies</option>
        <option value="Google">Google</option>
        <option value="Microsoft">Microsoft</option>
      </select>
    </div>
  );
};

export default JobFilters;
