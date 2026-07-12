import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if a user is already registered
    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (
      existingUser &&
      existingUser.email.toLowerCase() === trimmedEmail
    ) {
      alert("An account with this email already exists.");
      return;
    }

    // Save user
    const newUser = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    // Clear form
    setName("");
    setEmail("");
    setPassword("");

    alert("Registration Successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-700 overflow-hidden">

        <div className="absolute w-80 h-80 rounded-full bg-white/10 -top-20 -left-20"></div>

        <div className="absolute w-96 h-96 rounded-full bg-cyan-300/10 -bottom-20 -right-20"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">

          <h1 className="text-5xl font-bold leading-tight">
            Create Your
            <br />
            Task Manager
            <br />
            Account
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Start organizing your work, track progress, manage
            priorities and never miss a deadline again.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-xl">📝 Create Tasks</h3>
              <p className="text-sm mt-2 text-blue-100">
                Quickly add your daily work.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-xl">⭐ Set Priority</h3>
              <p className="text-sm mt-2 text-blue-100">
                Focus on important tasks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-xl">📅 Deadlines</h3>
              <p className="text-sm mt-2 text-blue-100">
                Keep every due date visible.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">
              <h3 className="font-semibold text-xl">🚀 Stay Productive</h3>
              <p className="text-sm mt-2 text-blue-100">
                Manage everything in one place.
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
              🚀
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Register to start managing your tasks.
            </p>

          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;