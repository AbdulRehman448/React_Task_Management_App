import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-4">
            Dashboard
          </h1>

          <p>
            Welcome to your Task Management Dashboard.
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;