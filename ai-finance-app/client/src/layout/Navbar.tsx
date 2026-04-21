import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Target } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium ${
      location.pathname === path
        ? "bg-[#111827] text-white"
        : "text-gray-400 hover:bg-lime-400 hover:text-black"
    }`;

  return (
    <aside className="w-64 bg-black text-white p-5 min-h-screen">
      {/* LOGO */}
      <h1 className="text-lg font-semibold mb-8">SpendWise</h1>

      {/* MENU BOX */}
      <div className="bg-[#0b0f19] p-2 rounded-md">
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
