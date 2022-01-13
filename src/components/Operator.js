import { useCalc, useCalcUpdate } from "../CalcContext";
import { StyledButton } from "./styled-components/StyledButton";

function check(calc, simbol) {
  if (calc.slice(-1) === simbol || calc.length === 0) {
    return (calc += "");
  } else if (isNaN(parseFloat(calc.slice(-1)))) {
    return calc.slice(0, calc.length - 1).concat(simbol);
  } else if (calc.slice(-1) === "-") {
    return (calc += "");
  }
  return (calc += simbol);
}

const Operators = ({ operator }) => {
  const [name, simbol] = operator;
  let calc = useCalc();
  const updateCalc = useCalcUpdate();

  return (
    <StyledButton
      id={name}
      gridArea={name}
      onClick={() => updateCalc(check(calc, simbol))}
    >
      {simbol}
    </StyledButton>
  );
};

export default Operators;
