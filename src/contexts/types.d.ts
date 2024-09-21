export interface TransactionsProps {
  id: number;
  category: string;
  createdAt: string;
  description: string;
  price: number;
  type: "income" | "outcome";
}

export interface TransactionsContexType {
  transactions: TransactionsProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export interface TransactionsProviderProps {
  children: React.ReactNode;
}

export interface CreateTransactionInput {
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
}
