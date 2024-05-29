import styled, { css } from 'styled-components';

export const Logo = styled.img`
    ${({theme}) => css`
        width: 4rem;
        color: ${theme.color.text.light}
    `};
`;