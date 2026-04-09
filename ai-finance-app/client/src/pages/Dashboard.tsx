import type { Transaction } from "../types/transaction";

type Props = {
  transactions: Transaction[];
};

export default function Dashboard({ transactions }: Props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome to your financial dashboard! Here you can view your account
        balances, recent transactions, and financial insights.
      </p>

      <h2>Account Balances</h2>
      <p>
        Your current account balances are displayed here. You can see how much
        money you have in each of your accounts at a glance.
      </p>

      <h2>Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        transactions.map((t, i) => (
          <div key={i}>
            {t.category} - £{t.amount} - {t.date}
          </div>
        ))
      )}
    </div>
  );
}
