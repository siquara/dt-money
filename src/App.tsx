import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/deafault";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
      
  );
}
