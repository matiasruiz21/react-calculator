import styled from "styled-components";

const CalcContainer = styled.div`
  display: grid;
  gap: 0.27rem;
  grid-auto-columns: 1fr;
  grid-auto-rows: 0.95fr;
  grid-template-areas:
    "seven eight nine divide"
    "four five six multiply"
    "one two three subtract"
    "zero decimal del add"
    "clear clear equals equals";
`;

export { CalcContainer };
