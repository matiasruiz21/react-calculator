import { useCalc, useCalcUpdate } from "../CalcContext";
import { Math } from "../helper/Math";
import { StyledButton } from "./styled-components/StyledButton";

const Equals = () => {
  const calc = useCalc();
  const updateCalc = useCalcUpdate();
  return (
    <StyledButton
      id="equals"
      gridArea="equals"
      onClick={() => updateCalc(Math(calc).toString())}
    >
      =
    </StyledButton>
  );
};

export default Equals;
