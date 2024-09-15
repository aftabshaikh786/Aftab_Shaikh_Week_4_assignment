import React, { useState } from 'react';

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="job-form">
      {submitted ? (
        <h3>Application Submitted!</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          />
          <button type="submit">Apply</button>
        </form>
      )}
    </div>
  );
};

export default JobForm;
