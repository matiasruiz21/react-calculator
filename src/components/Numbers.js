import { useCalc, useCalcUpdate } from "../CalcContext";
import { StyledButton } from "./styled-components/StyledButton";

function check(calc, number) {
  if (calc.slice(-1) === "0" && calc.length === 1) {
    return number;
  } else if (!/([1-9]+)\d+$/.test(calc) && calc.slice(-1) === "0") {
    if (/(\d*[.])\d+$/.test(calc)) return (calc += number);
    return (calc += "");
  }
  return (calc += number);
}

const Numers = ({ button }) => {
  const [name, number] = button;
  let calc = useCalc();
  const updateCalc = useCalcUpdate();
  return (
    <StyledButton
      id={name}
      gridArea={name}
      onClick={() => updateCalc(check(calc, number))}
    >
      {number}
    </StyledButton>
  );
};

export default Numers;
