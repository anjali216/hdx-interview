import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-full min-h-screen">
      <div className="p-6 text-2xl font-bold border-b border-slate-700 text-blue-400">
        HDX Agency
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/dashboard" className="block p-3 hover:bg-slate-800 rounded transition-colors">
          Dashboard
        </Link>
        
        {/* Admin Only */}
        {user?.role === 'Admin' && (
          <Link to="/employees" className="block p-3 hover:bg-slate-800 rounded transition-colors">
            Employees
          </Link>
        )}

        {/* Admin & Manager */}
        {(user?.role === 'Admin' || user?.role === 'Manager') && (
          <Link to="/projects" className="block p-3 hover:bg-slate-800 rounded transition-colors">
            Projects
          </Link>
        )}

        <Link to="/tasks" className="block p-3 hover:bg-slate-800 rounded transition-colors">
          Tasks
        </Link>
      </nav>

      <button 
        onClick={handleLogout}
        className="p-4 bg-red-600 hover:bg-red-700 transition-colors font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;