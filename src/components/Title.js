import { FaReact } from "react-icons/fa";
import styled from "styled-components";

const Title = () => {
  return (
    <Flex>
      <h1>React Calculator</h1>
      <FaReact color="#61dafb" size="3rem" />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.25rem;

  h1 {
    font-size: clamp(2rem, 2vw + 1rem, 5rem);
    margin-right: 0.5rem;
  }
`;
export default Title;
