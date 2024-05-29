import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme}) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacings.gap.small};
        color: ${theme.color.text.light};
        
        @media ${theme.media.mobile} {
            flex-direction: column;
            gap: ${theme.spacings.gap.big};
            padding: ${theme.spacings.padding.medium};
        }
    `};

`;

export const List = styled.li`
    ${() => css`
        list-style: none;
    `};
`;

export const LinkContainer = styled.a`
    ${({theme}) => css`
        color: ${theme.color.text.light};
        text-decoration: none;
    `};
`;