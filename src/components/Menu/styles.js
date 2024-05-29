import styled, { css } from 'styled-components';

export const Header = styled.header`
    ${({theme}) => css`
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 6;
        border-bottom: 1px solid #cccc;

        color: ${theme.color.text.light};
        background: ${theme.color.bg.dark};
    `};
`;

export const Content = styled.div`
    ${({theme}) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: ${theme.spacings.padding.medium};
    `}
`;
