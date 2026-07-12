function TaskCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-4">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-xl font-semibold">
            Complete React Assignment
          </h3>

          <p className="text-gray-600 mt-2">
            Build a Task Management App using React.
          </p>

          <span className="inline-block mt-4 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            Pending
          </span>

        </div>

        <div className="flex gap-3">

          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Complete
          </button>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit
          </button>

          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;