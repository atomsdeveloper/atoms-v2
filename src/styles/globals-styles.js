import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0
    }
    html {
        font-size: 62.5%;
    }
    body {
        ${({theme}) => css`
            font-family: ${theme.font.family.default};
            font-size: ${theme.font.size.default};
        `}
    }
    h1 {
        ${({theme}) => css`
            font-family: ${theme.font.family.default};
        `}   
    }
`;