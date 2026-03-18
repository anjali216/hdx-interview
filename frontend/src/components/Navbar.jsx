import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8 z-10">
      <div className="text-gray-500 text-sm">
        Path: <span className="text-blue-600 font-medium">Admin / Dashboard</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm font-bold text-gray-800">{user?.name || 'Guest User'}</p>
          <p className="text-xs text-blue-500 capitalize">{user?.role || 'Role'}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
          {user?.name?.charAt(0) || 'U'}
        </div>
      </div>
    </header>
  );
};

export default Navbar;