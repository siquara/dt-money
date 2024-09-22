import { useMemo } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  /// convertendo o array de transactions em um objeto com entradas, saidas e total {income: 0, outcome: 0, total: 0}
  const sumary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.price;
        } else {
          acc.outcome += transaction.price;
        }
        acc.total = acc.income - acc.outcome;

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return sumary;
}
