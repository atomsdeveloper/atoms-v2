import P from 'prop-types';
import * as Styled from './styles';

export const LogoMenu = ( {src, alt} ) => {
    return (
        <Styled.Logo src={src} alt={alt}></Styled.Logo>
    );
};
LogoMenu.propTypes = {
    src: P.string.isRequired,
    alt: P.string.isRequired
};