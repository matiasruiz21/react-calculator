import styled from "styled-components";

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { Link };
