import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobCard;
