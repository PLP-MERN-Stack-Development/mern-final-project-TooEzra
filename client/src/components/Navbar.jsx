import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 shadow-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wider">Ezra Blog</Link>
        
        <div className="flex items-center gap-8 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          
          {user ? (
            <>
              <Link to="/create" className="hover:text-yellow-300 transition">New Post</Link>
              <div className="bg-white/20 px-5 py-2 rounded-full font-bold">
                Welcome, {user.name || 'User'}!
              </div>
              <button 
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full transition font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
              <Link to="/register" className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition font-semibold">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
