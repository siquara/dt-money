import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;




`;

export const TransactionsTableContainer = styled.div`
  overflow-x: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 2rem auto 0;
    padding: 0 0.5rem;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  thead td {
    background: ${(props) => props.theme["gray-600"]};
  }
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    td {
      padding: 1rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 0;
    td {
      padding: 0.75rem 1rem;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
