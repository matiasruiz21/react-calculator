import { useCalc, useCalcUpdate } from "../CalcContext";
import { StyledButton } from "./styled-components/StyledButton";

function check(calc, simbol) {
  if (calc.slice(-1) === simbol) {
    return (calc += "");
  } else if (isNaN(parseFloat(calc.slice(-1))) || calc.length === 0) {
    return (calc += "0.");
  }
  return /(\d*[.])\d+$/.test(calc) ? (calc += "") : (calc += simbol);
}

const Decimal = () => {
  const calc = useCalc();
  const updateCalc = useCalcUpdate();
  return (
    <StyledButton
      id="decimal"
      gridArea="decimal"
      onClick={() => updateCalc(check(calc, "."))}
    >
      .
    </StyledButton>
  );
};

export default Decimal;
