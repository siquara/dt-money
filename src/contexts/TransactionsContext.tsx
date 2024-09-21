import { createContext, useEffect, useState } from "react";
import {
  TransactionsContexType,
  TransactionsProps,
  TransactionsProviderProps,
} from "./types";
import { api } from "../lib/axios";

export const TransactionsContext = createContext({} as TransactionsContexType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransactions(query?:string) {

    const response = await api.get("/transactions", {
      params:{
        q: query
      }
    })

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
