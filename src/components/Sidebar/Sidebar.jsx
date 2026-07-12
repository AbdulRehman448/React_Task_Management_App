import { Link } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaInfoCircle,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Menu
      </h2>

      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaTasks />
            Tasks
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaInfoCircle />
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;