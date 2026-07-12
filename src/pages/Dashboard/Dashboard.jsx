import TaskCard from "../../components/TaskCard/TaskCard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
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
                0
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">
                Completed
              </h2>

              <p className="text-4xl font-bold text-green-600 mt-3">
                0
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-gray-500 text-lg">
                Pending
              </h2>

              <p className="text-4xl font-bold text-red-500 mt-3">
                0
              </p>
            </div>

          </div>

          {/* Add Button */}

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold mb-8">
            + Add New Task
          </button>

          {/* Task Section */}

          <div className="bg-white rounded-lg shadow p-8">

            <h2 className="text-2xl font-semibold mb-4">
              Tasks
            </h2>

            <TaskCard />
            <TaskCard />
            <TaskCard />

          </div>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;