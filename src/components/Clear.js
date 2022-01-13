import { useCalcUpdate } from "../CalcContext";

import { StyledButton } from "./styled-components/StyledButton";

const Clear = () => {
  const updateCalc = useCalcUpdate();
  return (
    <StyledButton id="clear" gridArea="clear" onClick={() => updateCalc("0")}>
      AC
    </StyledButton>
  );
};

export default Clear;
