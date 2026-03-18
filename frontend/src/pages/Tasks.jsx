import React from 'react';

const Tasks = () => {
  // Role-based logic: Employees view/update assigned only [cite: 24]
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Tasks & Assignments</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Card Example */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase text-red-500">High Priority [cite: 45]</span>
            <span className="text-xs text-gray-400">Due: 2024-12-01 [cite: 46]</span>
          </div>
          <h3 className="font-bold text-lg mb-2">Fix Auth Middleware</h3>
          <p className="text-gray-600 text-sm mb-4">Review JWT logic and bcrypt implementation[cite: 19, 20].</p>
          <div className="flex items-center justify-between border-t pt-4">
            <select className="text-sm border rounded p-1">
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed [cite: 46]</option>
            </select>
            <button className="text-blue-500 text-sm">View Comments [cite: 47]</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;