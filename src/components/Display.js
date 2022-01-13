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
  border: 2.5px solid #262626;
`;

const Text = styled.p`
  font-family: "Share Tech Mono", monospace;
  padding: 0.5rem;
  font-size: 1.75rem;
  word-break: break-all;
  text-align: right;
`;

export default Display;
