import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope, FaLock, FaTasks } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please register first.");
      navigate("/register");
      return;
    }

    if (
      email.trim().toLowerCase() === savedUser.email.toLowerCase() &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 overflow-hidden">

        <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">

          <div className="bg-white text-blue-700 p-5 rounded-full shadow-lg w-fit mb-8">
            <FaTasks size={36} />
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
            <br />
            to Task Manager
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            Sign in to organize your tasks, track progress
            and stay productive.
          </p>

          <div className="mt-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-300/30 rounded-full px-5 py-2">
              <p className="text-green-100 text-sm">
                🔒 Secure Login • Personal Dashboard
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center bg-slate-100 p-6">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

          <div className="text-center mb-8">

            <div className="text-5xl mb-3">
              👋
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to your personal workspace.
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all"
            >
              Login to Dashboard
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;