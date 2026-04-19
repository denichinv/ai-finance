import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import { useTransactions } from "./hooks/useTransactions";

function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  const { transactions, loading, error, refetch } = useTransactions();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Dashboard transactions={transactions} onRefresh={refetch} />
            }
          />

          <Route path="add" element={<AddTransaction onSuccess={refetch} />} />

          <Route path="goals" element={<Goals />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
