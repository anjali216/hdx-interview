/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Employees = () => {
  // Fields required: Name, Email, Phone, Department, Role, Salary, Date of Joining [cite: 35]
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          + Add Employee [cite: 31]
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <input 
            type="text" 
            placeholder="Search by name or department..."
            className="w-full max-w-sm p-2 border rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Department</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">John Doe</td>
              <td className="p-4 text-gray-600">Developer</td>
              <td className="p-4 text-gray-600">Engineering</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span></td>
              <td className="p-4">
                <button className="text-blue-600 mr-3">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-4 flex justify-end text-sm text-gray-500">
          Pagination: 1 of 5 [cite: 34]
        </div>
      </div>
    </div>
  );
};

export default Employees;