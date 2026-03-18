import React from 'react';

const Dashboard = () => {
    // Mock data based on PDF requirements
    const stats = [
        { label: 'Total Employees', value: 42, color: 'bg-blue-500' },
        { label: 'Total Projects', value: 12, color: 'bg-green-500' },
        { label: 'Active Tasks', value: 8, color: 'bg-yellow-500' },
        { label: 'Completed Tasks', value: 156, color: 'bg-purple-500' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Enterprise Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className={`${stat.color} text-white p-6 rounded-lg shadow`}>
                        <p className="text-sm opacity-80">{stat.label}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex items-center justify-center">
                <p className="text-gray-400">[Chart Visualization Placeholder - PDF Req: 29]</p>
            </div>
        </div>
    );
};

export default Dashboard;