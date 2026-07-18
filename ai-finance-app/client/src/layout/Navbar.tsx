import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Target,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../features/auth/hooks/useAuth";

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-lime-500 text-black"
        : "text-gray-400 hover:bg-gray-700"
    }`;

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-gray-900 p-5 text-white">
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

      <div className="mt-auto border-t border-gray-800 pt-4">
        <div className="flex items-center gap-3 rounded-xl bg-gray-800/60 p-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-gray-950"
          >
            {user?.fullName.charAt(0).toUpperCase() ?? "U"}
          </span>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Your account
            </p>
            <p className="mt-0.5 truncate text-sm font-semibold text-white">
              {user?.fullName}
            </p>
            <p className="mt-0.5 truncate text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>

        <button
          className="mt-3 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
          onClick={logout}
          type="button"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
