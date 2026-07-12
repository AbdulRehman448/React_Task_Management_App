import { useState } from "react";

import TaskCard from "../../components/TaskCard/TaskCard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Build the Task Management App.",
      completed: false,
    },
    {
      id: 2,
      title: "Study React Hooks",
      description: "Learn useState and useEffect.",
      completed: true,
    },
    {
      id: 3,
      title: "Push Code to GitHub",
      description: "Commit today's progress.",
      completed: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 bg-gray-100 min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">Total Tasks</h2>
              <p className="text-4xl font-bold mt-3">{tasks.length}</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">Completed</h2>
              <p className="text-4xl font-bold text-green-600 mt-3">
                {tasks.filter((task) => task.completed).length}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">Pending</h2>
              <p className="text-4xl font-bold text-red-500 mt-3">
                {tasks.filter((task) => !task.completed).length}
              </p>
            </div>
          </div>

          {/* Add Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold mb-8">
            + Add New Task
          </button>

          {/* Task Section */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold mb-4">Tasks</h2>

            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={deleteTask}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;