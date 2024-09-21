import { createContext, useEffect, useState } from "react";
import { TransactionsContexType, TransactionsProps, TransactionsProviderProps } from "./types";


export const TransactionsContext = createContext({} as TransactionsContexType)

export function TransactionsProvider( {children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
    async function fetchTransactions() {
      const response = await fetch("http://localhost:3333/transactions");
      const data = await response.json();
  
      setTransactions(data);
    }
  
    useEffect(() => {
      fetchTransactions();
    }, []);
  

    return(
        <TransactionsContext.Provider value={{transactions}}>
        {children}
        </TransactionsContext.Provider>
    )
}