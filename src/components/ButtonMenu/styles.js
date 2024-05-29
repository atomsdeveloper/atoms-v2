import styled, { css } from 'styled-components';

export const Button = styled.div`
    ${({theme}) => css`
        color: ${theme.color.text.light};
    `};
`;