import { StyledButton } from "./styled-components/StyledButton";
import { FiDelete } from "react-icons/fi";
import { useCalc, useCalcUpdate } from "../CalcContext";

const Delete = () => {
  const calc = useCalc();
  const updateCalc = useCalcUpdate();
  return (
    <StyledButton id="delete" onClick={() => updateCalc(calc.slice(0, -1))}>
      <FiDelete size="1.25em" />
    </StyledButton>
  );
};

export default Delete;
