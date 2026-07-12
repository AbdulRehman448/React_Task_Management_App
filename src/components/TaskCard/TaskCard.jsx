function TaskCard({ task, onDelete, onComplete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">
            {task.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {task.description}
          </p>

          <span
            className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onComplete(task.id)}
            className={`text-white px-4 py-2 rounded ${
                task.completed
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
            >
            {task.completed ? "Undo" : "Complete"}
        </button>

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>

          <button
  onClick={() => onDelete(task.id)}
  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
>
  Delete
</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;