import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaInfoCircle,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl hidden md:block">
      <div className="p-6">

        <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
          📂 Menu
        </h2>

        <p className="text-gray-400 text-sm mb-8">
          Task Management System
        </p>

        <ul className="space-y-3">

          <li>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                location.pathname === "/dashboard"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              <FaHome />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-gray-300 transition"
            >
              <FaTasks />
              Tasks
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                location.pathname === "/about"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold"
                  : "hover:bg-white/10 text-gray-300"
              }`}
            >
              <FaInfoCircle />
              About
            </Link>
          </li>

        </ul>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-300 font-medium">
            React Task Manager
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;