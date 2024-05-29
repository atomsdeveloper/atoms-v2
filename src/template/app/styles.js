import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme}) => css`
        color: ${theme.color.textDark};
    `};
`;

export const SectionContainer = styled.div`
    ${({theme, bg}) => css`
        height: calc(100vh - 51px);
        padding-top: 51px;
        background: ${bg ? theme.color.bg.ligth : theme.color.text.dark};
    `};
`;