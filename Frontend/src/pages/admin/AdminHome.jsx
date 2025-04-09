import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  // Demo Registered Users
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      username: 'john123',
      email: 'john@example.com',
      mobile: '9876543210',
      bloodGroup: 'O+',
      role: 'Donor',
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'jane_smith',
      email: 'jane@example.com',
      mobile: '9123456780',
      bloodGroup: 'A-',
      role: 'Receiver',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      username: 'aliceJ',
      email: 'alice@example.com',
      mobile: '9087654321',
      bloodGroup: 'B+',
      role: 'Donor',
    },
    {
      id: 4,
      name: 'Robert Brown',
      username: 'robertB',
      email: 'robert@example.com',
      mobile: '8765432109',
      bloodGroup: 'AB-',
      role: 'Receiver',
    },
  ]);

  // Handle Delete User
  const handleDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Admin Home Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Dashboard
        </h1>
        <button
          onClick={() => navigate('/addPatient')}
          className="w-full mt-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-gray-600 transition duration-300">
          Add New Patient
        </button>
        {/* Registered Users Table */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Registered Users/ Available Donors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr className="text-left">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Username</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Mobile</th>
                  <th className="p-3 border">Blood Group</th>
                  <th className="p-3 border">Role</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr
                    key={user.id}
                    className="text-gray-700">
                    <td className="p-3 border">{user.name}</td>
                    <td className="p-3 border">{user.username}</td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">{user.mobile}</td>
                    <td className="p-3 border">{user.bloodGroup}</td>
                    <td className="p-3 border">{user.role}</td>
                    <td className="p-3 border flex space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Contact
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blood Donation & Request Section */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Receivers List */}
          <div className="w-full bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Users Requesting Blood
            </h2>
            {users.filter(user => user.role === 'Receiver').length > 0 ? (
              <ul className="w-full list-disc pl-5 space-y-2 text-gray-700">
                {users
                  .filter(user => user.role === 'Receiver')
                  .map(user => (
                    <li
                      key={user.id}
                      className="border p-3 rounded-lg flex justify-between">
                      {user.name} -{' '}
                      <span className="font-semibold">{user.bloodGroup}</span>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => navigate(`/patientDetails/${user.id}`)}>
                        See Details
                      </button>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-gray-600">No users requesting blood.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
