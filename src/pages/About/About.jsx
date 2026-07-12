import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaTasks,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaEdit,
  FaTrash,
  FaDatabase,
  FaMobileAlt,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-12 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl shadow-2xl text-white p-10 mb-10">

            <div className="absolute w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-20 -top-20 -left-20"></div>
            <div className="absolute w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20 -bottom-20 -right-20"></div>

            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-5">
                Task Management Application
              </h1>

              <p className="text-lg text-blue-100 leading-8 max-w-3xl">
                A clean, responsive and modern task management application
                built with React that helps users organize work, track
                progress, manage priorities and stay productive.
              </p>
            </div>

          </div>

          {/* About */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              About This Project
            </h2>

            <p className="text-gray-600 leading-8">
              This project demonstrates modern frontend development using
              React, React Router and Tailwind CSS. Users can register,
              login, create tasks, edit them, delete them, search, filter,
              sort and manage priorities with a beautiful responsive
              interface. All data is stored securely in the browser using
              Local Storage.
            </p>

          </div>

          {/* Features */}

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-xl w-fit mb-4">
                <FaTasks size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Task Management</h3>
              <p className="text-gray-600 mt-2">
                Create, update and organize daily tasks.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-green-100 text-green-600 p-4 rounded-xl w-fit mb-4">
                <FaSearch size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Search</h3>
              <p className="text-gray-600 mt-2">
                Instantly find tasks with keyword search.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-orange-100 text-orange-500 p-4 rounded-xl w-fit mb-4">
                <FaFilter size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Filtering</h3>
              <p className="text-gray-600 mt-2">
                Filter tasks by completion and priority.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-xl w-fit mb-4">
                <FaSortAmountDown size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Sorting</h3>
              <p className="text-gray-600 mt-2">
                Sort by newest, due date or priority.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-cyan-100 text-cyan-600 p-4 rounded-xl w-fit mb-4">
                <FaEdit size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Edit Tasks</h3>
              <p className="text-gray-600 mt-2">
                Update tasks anytime with ease.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-red-100 text-red-500 p-4 rounded-xl w-fit mb-4">
                <FaTrash size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Delete Tasks</h3>
              <p className="text-gray-600 mt-2">
                Remove completed or unnecessary tasks.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl w-fit mb-4">
                <FaDatabase size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Local Storage</h3>
              <p className="text-gray-600 mt-2">
                Your tasks remain saved after refresh.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-pink-100 text-pink-600 p-4 rounded-xl w-fit mb-4">
                <FaMobileAlt size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Responsive</h3>
              <p className="text-gray-600 mt-2">
                Works beautifully on desktop and mobile.
              </p>
            </div>

          </div>

          {/* Tech Stack */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">

            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Technology Stack
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:-translate-y-1 transition duration-300">
                <FaReact className="text-cyan-500 text-5xl mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">React</h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:-translate-y-1 transition duration-300">
                <h3 className="text-5xl mb-3">🎨</h3>
                <h3 className="font-semibold text-gray-800">Tailwind CSS</h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:-translate-y-1 transition duration-300">
                <h3 className="text-5xl mb-3">🧭</h3>
                <h3 className="font-semibold text-gray-800">React Router</h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:-translate-y-1 transition duration-300">
                <h3 className="text-5xl mb-3">💾</h3>
                <h3 className="font-semibold text-gray-800">Local Storage</h3>
              </div>

            </div>

          </div>

          {/* Developer */}

          <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl shadow-xl p-10 text-white">

            <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20 -top-16 -left-16"></div>
            <div className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 -bottom-16 -right-16"></div>

            <div className="relative z-10">

            <h2 className="text-3xl font-bold mb-5">
              About the Developer
            </h2>

            <p className="text-blue-100 leading-8">
              This project was developed by <strong>Abdul Rehman Ali</strong>,
              a BS Computer Science student and AI Automation Engineer who
              enjoys building modern web applications, automation systems,
              and user-focused software solutions using React, JavaScript,
              Python, and AI technologies.
            </p>

            <p className="text-blue-100 mt-5 leading-8">
              This application demonstrates CRUD operations, authentication,
              routing, responsive UI design, local storage, filtering,
              searching and component-based architecture.
            </p>

            {/* Professional Links */}

            <div className="grid md:grid-cols-3 gap-5 mt-10">

              <a
                href="https://abdulrehmanali.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition rounded-2xl p-6 border border-white/20"
              >
                <FaGlobe className="text-4xl mb-4" />
                <h3 className="text-xl font-bold">
                  Portfolio
                </h3>

                <p className="text-sm text-blue-100 mt-2 break-all">
                  abdulrehmanali.netlify.app
                </p>
              </a>

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition rounded-2xl p-6 border border-white/20"
              >
                <FaGithub className="text-4xl mb-4" />

                <h3 className="text-xl font-bold">
                  GitHub
                </h3>

                <p className="text-sm text-blue-100 mt-2">
                  github.com/AbdulRehman448
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-rehman-ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition rounded-2xl p-6 border border-white/20"
              >
                <FaLinkedin className="text-4xl mb-4" />

                <h3 className="text-xl font-bold">
                  LinkedIn
                </h3>

                <p className="text-sm text-blue-100 mt-2 break-all">
                  linkedin.com/in/abdul-rehman-ali
                </p>
              </a>

            </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;