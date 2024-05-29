import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacings.gap.small};
        color: ${theme.color.text.light};
        
        @media ${theme.media.mobile} {
            display: none;
        }
    `};

`;

export const Button = styled.div`
        ${({theme}) => css`
        display: none;
        align-items: center;
        justify-content: center;
        color: ${theme.color.text.dark};
        background: ${theme.color.bg.light};
        
        border-radius: 50%;
        border: none;

        @media ${theme.media.mobile} {
            display: flex;
        }
    `};
`; 