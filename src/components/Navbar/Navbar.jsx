import { Link, useLocation } from "react-router-dom";
import { FaTasks, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl">
            <FaTasks size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Task Manager
            </h1>

            <p className="text-sm text-blue-100">
              Manage your daily tasks efficiently
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3">

          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-lg transition ${
              location.pathname === "/dashboard"
                ? "bg-white text-blue-700 font-semibold shadow-md"
                : "hover:bg-white/10"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className={`px-4 py-2 rounded-lg transition ${
              location.pathname === "/about"
                ? "bg-white text-blue-700 font-semibold shadow-md"
                : "hover:bg-white/10"
            }`}
          >
            About
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/90 hover:bg-red-600 transition font-medium shadow-md"
          >
            <FaSignOutAlt />
            Logout
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;