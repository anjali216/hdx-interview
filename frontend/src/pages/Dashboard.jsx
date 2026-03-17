import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ employees: 0, projects: 0, tasks: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await api.get('/reports/summary'); // Requirement [cite: 50]
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Enterprise Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <h3>Total Employees</h3> {/* Requirement [cite: 26] */}
          <p className="text-3xl font-bold">{stats.employees}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3>Total Projects</h3> {/* Requirement [cite: 27] */}
          <p className="text-3xl font-bold">{stats.projects}</p>
        </div>
        {/* Visualization component would go here [cite: 29] */}
      </div>
    </div>
  );
};

export default Dashboard;