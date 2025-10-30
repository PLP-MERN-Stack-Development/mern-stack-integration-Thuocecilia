import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-pink-400 drop-shadow-lg">
          CampusConnect
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10 text-lg font-bold">
          <Link
            to="/"
            className="hover:text-pink-400 transition duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            Home
          </Link>

          <Link
            to="/posts"
            className="hover:text-green-400 transition duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            Posts
          </Link>

          <Link
            to="/create"
            className="hover:text-blue-400 transition duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            Create Post
          </Link>

          <Link
            to="/profile"
            className="hover:text-yellow-400 transition duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            Profile
          </Link>

          <Link
            to="/login"
            className="hover:text-purple-400 transition duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hover:text-red-400 transition duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
