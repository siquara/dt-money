import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/deafault";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
