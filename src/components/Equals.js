import { useCalc, useCalcUpdate } from "../CalcContext";
import { StyledButton } from "./styled-components/StyledButton";
import { evaluate, format } from "mathjs";

function parse(calc) {
  let res = evaluate(calc);
  return format(res, 4).toString();
}

const Equals = () => {
  const calc = useCalc();
  const updateCalc = useCalcUpdate();
  return (
    <>
      <StyledButton
        id="equals"
        gridArea="equals"
        onClick={() => updateCalc(parse(calc))}
      >
        =
      </StyledButton>
    </>
  );
};

export default Equals;
