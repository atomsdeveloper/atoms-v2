import * as Styled from './styles';

import { LogoMenu } from '../LogoMenu';
import { NavLinks } from '../NavLinks';

export const Menu = () => {
    return (
        <Styled.Header>
            <Styled.Content>
                <LogoMenu src={'./assets/atomo-white.png'} alt={'logo/navbar'}/>
                <NavLinks />
            </Styled.Content>
        </Styled.Header>
    );
};
