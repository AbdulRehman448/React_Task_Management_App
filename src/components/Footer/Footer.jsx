function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-gray-300 mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

        <div>
          <h3 className="text-lg font-semibold text-white">
            📋 React Task Manager
          </h3>

          <p className="text-sm text-gray-400">
            Organize your daily tasks with ease.
          </p>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>© 2026 React Task Management App</p>
          <p className="text-gray-500 mt-1">
            Built with React, Tailwind CSS & React Router
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;