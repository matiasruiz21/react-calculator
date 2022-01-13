import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: clamp(1rem, 1vw + 1rem, 1.35rem);
  font-weight: 500;
  padding: 1rem;
  grid-area: ${({ gridArea }) => gridArea};
  border-radius: 5px;
  border-color: white;
  cursor: pointer;

  // Unselectable
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export { StyledButton };
