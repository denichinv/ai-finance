const API_URL = "http://localhost:5118/api/Transactions";
console.log("API_URL:", API_URL);
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

export const getTransactions = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  return response.json();
};
