import styled from "styled-components";

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  p {
    margin-right: 0.25rem;
  }
`;

export { Link };
