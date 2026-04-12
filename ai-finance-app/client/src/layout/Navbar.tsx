import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Target } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? "bg-lime-400 text-black"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-black text-white p-5 flex flex-col h-screen">
      {/* LOGO */}
      <h1 className="text-lg font-semibold mb-8">SpendWise</h1>

      {/* NAV */}
      <nav className="flex flex-col gap-2">
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
    </aside>
  );
}
