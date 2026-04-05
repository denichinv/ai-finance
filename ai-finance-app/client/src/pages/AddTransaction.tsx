import { useState } from "react";
import type { Transaction } from "../types/transaction";

type Props = {
  onAddTransaction: (Transaction: Transaction) => void;
};

export default function AddTransaction({ onAddTransaction }: Props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transaction: Transaction = {
      amount: Number(amount),
      category,
      type,
      date,
    };
    if (!amount || Number(amount) <= 0) return;
    if (!category) return;
    if (!date) return;
    alert("Transaction added");
    onAddTransaction(transaction);
    alert("Transaction added");
    // from here we will send data to the backend API to save the transaction
    console.log(transaction);
    // Reset form fields after the submission
    setAmount("");
    setCategory("");
    setType("expense");
    setDate("");
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <p>
        Use this form to add a new transaction to your financial records. You
        can specify the amount, date, category, and description of the
        transaction.
      </p>

      <form onSubmit={handleSubmit}>
        <label> Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label> Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label> Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <label> Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
