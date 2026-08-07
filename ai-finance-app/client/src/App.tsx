import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import { useTheme } from "./hooks/useTheme";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import DecorativeBackground from "./components/ui/DecorativeBackground";

function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-[#0b1220]">
      <Navbar />

      <main className="relative isolate flex-1 overflow-hidden p-6 text-gray-900 dark:text-white">
        <DecorativeBackground />
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function App() {
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="add" element={<AddTransaction />} />

            <Route path="goals" element={<Goals />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
