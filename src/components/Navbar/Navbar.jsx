import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Task Manager
        </h1>

        <div className="flex gap-6">
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>

          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>

          <Link to="/login" className="hover:text-gray-200">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;