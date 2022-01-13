import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body ,p, h1{
        margin: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
        display:flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background-color: #333;
        color: white;
        min-height: 100vh
    }
    
`;

export default GlobalStyle;
