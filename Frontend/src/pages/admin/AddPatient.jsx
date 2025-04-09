import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    fullName: '',
    aadharNumber: '',
    mobile: '',
    bloodGroup: '',
    additionalDetails: '',
  });

  // Handle Input Change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Patient Registered:', formData);

    // TODO: Send form data to backend or database

    // Redirect to Admin Home after submission
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Register a New Patient
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          {/* Patient Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter patient's full name"
            />
          </div>

          {/* Aadhar Card Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Aadhar Card Number
            </label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Aadhar number"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Blood Group Required */}
          <div>
            <label className="block text-gray-700 font-medium">
              Blood Group Required
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-gray-700 font-medium">
              Additional Details
            </label>
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe why blood is required, and mention any disease"></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
            Register Patient
          </button>
        </form>

        {/* Back to Admin Page */}
        <button
          onClick={() => navigate('/adminHome')}
          className="w-full mt-3 bg-gray-500 text-white font-semibold py-2 rounded hover:bg-gray-600 transition duration-300">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPatient;
