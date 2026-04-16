const API_URL = "http://localhost:5118/api/Transactions";

// GET all transactions
export const getTransactions = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  return response.json();
};

// CREATE transaction
export const createTransaction = async (data: any) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create transaction");
  }

  return response.json();
};

// DELETE transaction
export const deleteTransaction = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete transaction");
  }
};
