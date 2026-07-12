import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-4xl font-bold mb-6">
            About Task Management App
          </h1>

          <p className="text-gray-700 leading-8 mb-4">
            This Task Management App helps users organize daily tasks,
            track progress, set priorities, and manage deadlines in one
            simple dashboard.
          </p>

          <p className="text-gray-700 leading-8 mb-4">
            The application is built using React, React Router,
            Tailwind CSS, and Local Storage to demonstrate CRUD
            operations, routing, state management, filtering,
            searching, and responsive design.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Features
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Create Tasks</li>
            <li>Edit Tasks</li>
            <li>Delete Tasks</li>
            <li>Search Tasks</li>
            <li>Filter Tasks</li>
            <li>Sort Tasks</li>
            <li>Responsive Design</li>
            <li>Local Storage Support</li>
          </ul>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;