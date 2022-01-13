import { useCalc, useCalcUpdate } from "../CalcContext";
import { StyledButton } from "./styled-components/StyledButton";

function check(calc, simbol) {
  if (calc.slice(-1) === "0" && calc.length === 1) {
    return simbol;
  } else if (calc.slice(-1) === simbol) {
    return (calc += "");
  }
  return (calc += simbol);
}

const Subtract = () => {
  let calc = useCalc();
  const updateCalc = useCalcUpdate();

  return (
    <StyledButton id="subtract" onClick={() => updateCalc(check(calc, "-"))}>
      -
    </StyledButton>
  );
};

export default Subtract;
