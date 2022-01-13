import React from "react";
import { CalcProvider } from "./CalcContext";
import Numers from "./components/Numbers";
import GlobalStyle from "./Global";
import Display from "./components/Display";
import Equals from "./components/Equals";
import Clear from "./components/Clear";
import Subtract from "./components/Subtract";
import Delete from "./components/Delete";
import Decimal from "./components/Decimal";
import { CalcContainer } from "./components/styled-components/CalcContainer";
import { Container } from "./components/styled-components/Container";
import Operators from "./components/Operator";
import { Link } from "./components/styled-components/Link";
import { FaGithub } from "react-icons/fa";
import Title from "./components/Title";

const numbers = [
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["zero", "0"],
];

const operators = [
  ["divide", "/"],
  ["multiply", "x"],
  ["add", "+"],
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <CalcProvider>
          <Title />
          <Display />
          <CalcContainer>
            {numbers.map((num, i) => (
              <Numers button={num} key={i} />
            ))}
            {operators.map((op, i) => (
              <Operators operator={op} key={i} />
            ))}

            <Decimal />
            <Subtract />
            <Delete />
            <Clear />
            <Equals />
          </CalcContainer>
        </CalcProvider>
        <Link
          href="https://github.com/matiasruiz21"
          target="_blank"
          rel="noreferrer"
        >
          <p>by mruiz</p>
          <FaGithub />
        </Link>
      </Container>
    </>
  );
}

export default App;
