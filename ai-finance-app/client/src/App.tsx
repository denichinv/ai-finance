import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import type { Transaction } from "./types/transaction";
import { useState, useEffect } from "react";
import { getTransactions } from "./api/transactions";

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
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Dashboard
                transactions={transactions}
                onRefresh={loadTransactions}
              />
            }
          />

          <Route
            path="add"
            element={<AddTransaction onSuccess={loadTransactions} />}
          />

          <Route path="goals" element={<Goals />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
