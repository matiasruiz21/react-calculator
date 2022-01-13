import { useCalc, useCalcUpdate } from "../CalcContext";
import { StyledButton } from "./styled-components/StyledButton";
import { evaluate } from "mathjs";

const Equals = () => {
  const calc = useCalc();
  const updateCalc = useCalcUpdate();
  return (
    <>
      <StyledButton
        id="equals"
        gridArea="equals"
        onClick={() => updateCalc(evaluate(calc).toString())}
      >
        =
      </StyledButton>
    </>
  );
};

export default Equals;
