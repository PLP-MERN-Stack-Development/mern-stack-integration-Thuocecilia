import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="fixed left-0 top-0 w-72 h-screen bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 flex flex-col justify-between shadow-2xl border-r border-white/20 py-8 px-5">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold text-white tracking-wide mb-8">
        CampusConnect
      </h1>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col justify-evenly space-y-3">
        <NavLink
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
        >
          Home
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/posts"
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
            >
              Posts
            </NavLink>

            <NavLink
              to="/categories"
              className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
            >
              Categories
            </NavLink>

            <NavLink
              to="/create-post"
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
            >
              Create Post
            </NavLink>

            <NavLink
              to="/profile"
              className="bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
            >
              Profile
            </NavLink>
          </>
        )}

        {!user && (
          <>
            <NavLink
              to="/login"
              className="bg-blue-400 hover:bg-blue-500 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 no-underline"
            >
              Register
            </NavLink>
          </>
        )}
      </nav>

      {/* Logout Button */}
      {user && (
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-5 rounded-lg shadow-md transition-all duration-200 hover:scale-105"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Sidebar;
