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
  //fetchTransactions: () => Promise<void>;
}

export interface TransactionsProviderProps {
  children: React.ReactNode;
}