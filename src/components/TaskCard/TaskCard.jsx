function TaskCard({ task, onDelete, onComplete, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Task Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">
            {task.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

          <p className="text-sm text-gray-500 mt-3">
            <span className="font-semibold">Due Date:</span>{" "}
            {task.dueDate || "Not Set"}
          </p>

          {/* Status & Priority */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                task.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                task.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : task.priority === "Medium"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {task.priority || "Medium"} Priority
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onComplete(task.id)}
            className={`text-white px-4 py-2 rounded-lg transition ${
              task.completed
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={() => onEdit(task)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;