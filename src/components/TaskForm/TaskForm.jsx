function TaskForm({
  title,
  description,
  setTitle,
  setDescription,
  addTask,
  editingTaskId,
}) {
  return (
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
          {editingTaskId ? "Update Task" : "Add Task"}
        </button>
    </div>
  );
}

export default TaskForm;