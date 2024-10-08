import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  @media (max-width: 840px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface SummaryCardProps {
  variant?: "green" | "red";
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  padding: 2rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    `
      background: ${props.theme["green-700"]};
    `}

${(props) =>
    props.variant === "red" &&
    `
      background: ${props.theme["red-700"]};
    `}
`;


