import styled from "styled-components";
import { useCalc } from "../CalcContext";

const Display = () => {
  const calc = useCalc();
  return (
    <DisplayStyled id="display">
      <Text>{calc}</Text>
    </DisplayStyled>
  );
};

const DisplayStyled = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  background-color: #1c1c1c;
  min-height: 15vh;
  margin-bottom: 0.5rem;
  border-radius: 10px;
`;

const Text = styled.p`
  padding: 0.5rem;
  font-size: clamp(1rem, 1vw + 1rem, 1.35rem);
  word-break: break-all;
`;

export default Display;
