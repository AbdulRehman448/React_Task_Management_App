import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import TaskCard from "../../components/TaskCard/TaskCard";
import TaskForm from "../../components/TaskForm/TaskForm";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return [
    {
  id: 1,
  title: "Complete React Assignment",
  description: "Build the Task Management App.",
  dueDate: "2026-07-20",
  priority: "High",
  completed: false,
  createdAt: 1,
},
    {
      id: 2,
      title: "Study React Hooks",
      description: "Learn useState and useEffect.",
      dueDate: "2026-07-22",
      priority: "Medium",
      completed: true,
      createdAt: 2,
    },
    {
      id: 3,
      title: "Push Code to GitHub",
      description: "Commit today's progress.",
      dueDate: "2026-07-22",
      priority: "Low",
      completed: false,
      createdAt: 3,
    },
  ];
});

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Complete / Undo Task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Add Task
const addTask = () => {
  if (title.trim() === "" || description.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Update Existing Task
  if (editingTaskId !== null) {
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId
          ? {
              ...task,
              title,
              description,
              dueDate,
              priority,
            }
          : task
      )
    );

    setEditingTaskId(null);
  } else {
    // Add New Task
const newTask = {
  id: uuidv4(),
  title,
  description,
  dueDate,
  priority,
  completed: false,
  createdAt: Date.now(),
};

    setTasks([...tasks, newTask]);
  }

  setTitle("");
  setDescription("");
  setDueDate("");
  setPriority("Medium");
};

  const editTask = (task) => {
  setEditingTaskId(task.id);
  setTitle(task.title);
  setDescription(task.description);
  setDueDate(task.dueDate);
  setPriority(task.priority);
};

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const filteredTasks = tasks.filter((task) => {
  const matchesSearch =
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase());

const matchesFilter =
  filterStatus === "all" ||
  (filterStatus === "completed" && task.completed) ||
  (filterStatus === "pending" && !task.completed);

const matchesPriority =
  priorityFilter === "all" ||
  task.priority === priorityFilter;

return matchesSearch && matchesFilter && matchesPriority;
});

<select
  value={priorityFilter}
  onChange={(e) => setPriorityFilter(e.target.value)}
  className="border rounded-lg p-3"
>
  <option value="all">All Priorities</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>

const sortedTasks = [...filteredTasks].sort((a, b) => {
  switch (sortBy) {
  case "dueDate":
    return new Date(a.dueDate) - new Date(b.dueDate);

  case "priority": {
    const priorityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    return priorityOrder[b.priority] - priorityOrder[a.priority];
  }

  case "oldest":
    return a.createdAt - b.createdAt;

  case "newest":
  default:
    return b.createdAt - a.createdAt;
}
});

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 bg-gray-100 min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">
                Total Tasks
              </h2>

              <p className="text-4xl font-bold mt-3">
                {tasks.length}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">
                Completed
              </h2>

              <p className="text-4xl font-bold text-green-600 mt-3">
                {tasks.filter((task) => task.completed).length}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">
                Pending
              </h2>

              <p className="text-4xl font-bold text-red-500 mt-3">
                {tasks.filter((task) => !task.completed).length}
              </p>
            </div>
          </div>

          {/* Task Form */}
          <TaskForm
  title={title}
  description={description}
  dueDate={dueDate}
  setTitle={setTitle}
  setDescription={setDescription}
  setDueDate={setDueDate}
  addTask={addTask}
  editingTaskId={editingTaskId}
/>

          {/* Task Section */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Tasks
            </h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">

            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border rounded-lg p-3"
            />
          
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-lg p-3"
            >
              <option value="all">All Tasks</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>

            <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="border rounded-lg p-3"
>
<option value="newest">Recently Added</option>
<option value="oldest">Oldest First</option>
<option value="dueDate">Due Date</option>
<option value="priority">Priority</option>
</select>
            
            </div>

            {sortedTasks.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold text-gray-600">
                  No matching tasks found
                </h3>

                <p className="text-gray-500 mt-2">
                  Try changing your search or filter.
                </p>
              </div>
            ) : (
              sortedTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onComplete={toggleComplete}
                  onEdit={editTask}
                />
              ))
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;