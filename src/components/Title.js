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
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  h1 {
    font-size: clamp(1.5rem, 3vw + 1.25rem, 2.5rem);
  }
`;
export default Title;
