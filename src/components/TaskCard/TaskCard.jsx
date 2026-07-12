import { FaCalendarAlt, FaCheck, FaUndo, FaEdit, FaTrash } from "react-icons/fa";

const priorityBorder = {
  High: "border-l-red-500",
  Medium: "border-l-orange-400",
  Low: "border-l-blue-500",
};

function TaskCard({ task, onDelete, onComplete, onEdit }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md border border-gray-100 border-l-4 ${
        priorityBorder[task.priority] || "border-l-gray-300"
      } p-6 mb-5 hover:shadow-xl hover:-translate-y-0.5 transition duration-300`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

        {/* Task Details */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">
            {task.title}
          </h3>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {task.description}
          </p>

          <div className="flex flex-wrap gap-2 items-center mt-5 text-sm text-gray-600">
            <FaCalendarAlt className="text-gray-400" />
            <span className="font-semibold text-gray-700">
              Due:
            </span>
            {task.dueDate || "Not Set"}
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-3 mt-5">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                task.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>

            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                task.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : task.priority === "Medium"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {task.priority} Priority
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 lg:flex-col">

          <button
            onClick={() => onComplete(task.id)}
            className={`flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-white font-medium shadow-sm hover:shadow-md transition ${
              task.completed
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {task.completed ? <FaUndo /> : <FaCheck />}
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={() => onEdit(task)}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
          >
            <FaEdit />
            Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium shadow-sm hover:shadow-md transition"
          >
            <FaTrash />
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}

export default TaskCard;