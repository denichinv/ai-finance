import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";
import type { Transaction } from "./types/transaction";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleTransaction = (newTransaction: Transaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="add"
            element={<AddTransaction onAddTransaction={handleTransaction} />}
          />
          <Route path="goals" element={<Goals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        transactions.map((t, i) => (
          <div key={i}>
            {t.category} - £{t.amount} - {t.date}
          </div>
        ))
      )}
    </>
  );
}

export default App;
