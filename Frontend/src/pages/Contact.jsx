import React, { useState } from 'react';

const Contact = () => {
  const [patient, setPatient] = useState({
    fullName: '',
    aadhaar: '',
    mobile: '',
    bloodGroup: '',
    details: '',
  });

  const handleChange = e => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Patient Data:', patient);
    alert('Patient Registered Successfully (Backend Integration Pending)');
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">
        Register for Blood Requirement
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Patient's Full Name"
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="text"
          name="aadhaar"
          placeholder="Aadhaar Card Number"
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group Required"
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <textarea
          name="details"
          placeholder="Why is blood required? Mention Disease if any..."
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded">
          Register Patient
        </button>
      </form>
    </div>
  );
};

export default Contact;
