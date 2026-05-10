import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Target, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-lime-500 text-black"
        : "text-gray-400 hover:bg-gray-700"
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white p-5 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold tracking-tight">
          <span className="text-primary">S</span>pend
          <span className="ml-0.5 text-primary">W</span>ise
        </h1>

        <button
          onClick={toggle}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-300" />
          )}
        </button>
      </div>

      {/* MENU BOX */}
      <div className="bg-gray-800 p-2 rounded-md">
        <nav className="flex flex-col gap-1">
          <Link to="/" className={linkClasses("/")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link to="/add" className={linkClasses("/add")}>
            <PlusCircle size={18} />
            Add
          </Link>

          <Link to="/goals" className={linkClasses("/goals")}>
            <Target size={18} />
            Goals
          </Link>
        </nav>
      </div>
    </aside>
  );
}
