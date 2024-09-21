import { createContext, useEffect, useState } from "react";
import {
  TransactionsContexType,
  TransactionsProps,
  TransactionsProviderProps,
} from "./types";

export const TransactionsContext = createContext({} as TransactionsContexType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransactions(query?:string) {

    const url = new URL ('http://localhost:3333/transactions')
    if(query){
      url.searchParams.append('q', query)
    }


    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
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
