import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-full">
      <div className="p-6 text-2xl font-bold border-b border-slate-700 text-blue-400">
        HDX Agency
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/dashboard" className="block p-3 hover:bg-slate-800 rounded">Dashboard</Link>
        
        {/* Admin Only: Employee Management [cite: 22, 30] */}
        {user?.role === 'Admin' && (
          <Link to="/employees" className="block p-3 hover:bg-slate-800 rounded">Employees</Link>
        )}

        {/* Admin & Manager: Project Management [cite: 23, 37] */}
        {(user?.role === 'Admin' || user?.role === 'Manager') && (
          <Link to="/projects" className="block p-3 hover:bg-slate-800 rounded">Projects</Link>
        )}

        <Link to="/tasks" className="block p-3 hover:bg-slate-800 rounded">Tasks</Link>
      </nav>
      <button 
        onClick={handleLogout}
        className="p-4 bg-red-600 hover:bg-red-700 transition-colors"
      >
        Logout [cite: 18]
      </button>
    </div>
  );
};

export default Sidebar;