import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import LoginPage from "./features/auth/pages/LoginPage";
import { useTheme } from "./hooks/useTheme";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

function Layout() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 p-6 text-gray-900 dark:text-white">
        <Outlet />
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
