import React from 'react';

const Projects = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Project Overview</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Create New Project
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-bold">Enterprise CRM Update</h3>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Active</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">Full stack migration to MERN[cite: 7].</p>
          <div className="text-sm text-gray-600 mb-2"><strong>Deadline:</strong> Dec 25, 2026 [cite: 39]</div>
          <div className="flex -space-x-2">
             {/* Avatars for assigned employees [cite: 38] */}
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px]">Emp</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;