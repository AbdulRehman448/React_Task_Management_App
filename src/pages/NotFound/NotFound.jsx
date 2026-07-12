import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6">

      <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="relative max-w-lg w-full backdrop-blur-xl bg-white/15 border border-white/20 rounded-3xl shadow-2xl p-10 text-center">

        <div className="flex justify-center mb-6">
          <div className="bg-white text-red-500 p-5 rounded-full shadow-lg">
            <FaExclamationTriangle size={40} />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold text-white">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-blue-100 mt-5 leading-relaxed">
          The page you're looking for doesn't exist,
          may have been moved, or the URL is incorrect.
        </p>

        <Link
          to="/login"
          className="inline-block mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-lg hover:-translate-y-1"
        >
          Back to Login
        </Link>

        <p className="mt-8 text-sm text-blue-200">
          Error Code: 404 • Resource Not Found
        </p>

      </div>

    </div>
  );
}

export default NotFound;