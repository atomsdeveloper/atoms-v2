import styled, { css } from 'styled-components';

export const Menu = styled.div`
    ${({theme}) => css`
        width: 100%;
        height: auto;
        display: none;
        color: ${theme.color.text.light};
        background: ${theme.color.bg.dark};
        z-index: 6;
        position: fixed;
        margin-top: 51px;

        @media ${theme.media.mobile} {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    `};
`;