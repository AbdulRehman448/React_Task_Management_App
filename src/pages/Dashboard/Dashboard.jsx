import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskCard from "../../components/TaskCard/TaskCard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

  const toggleComplete = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};

const addTask = () => {
  if (title.trim() === "" || description.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  const newTask = {
    id: uuidv4(),
    title,
    description,
    completed: false,
  };

  setTasks([...tasks, newTask]);

  setTitle("");
  setDescription("");
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
          <div className="bg-white rounded-lg shadow p-6 mb-8">

  <h2 className="text-2xl font-semibold mb-4">
    Add New Task
  </h2>

  <input
    type="text"
    placeholder="Task Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full border rounded-lg p-3 mb-4"
  />

  <textarea
    placeholder="Task Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="w-full border rounded-lg p-3 mb-4"
    rows="4"
  />

  <button
    onClick={addTask}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
  >
    Add Task
  </button>

</div>

          {/* Task Section */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold mb-4">Tasks</h2>

            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onComplete={toggleComplete}
                
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