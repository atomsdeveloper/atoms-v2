// import P from 'prop-types';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { MenuMobile } from '../../components/MenuMobile';
//import { Page } from '../../components/Page'

import { useSelector } from 'react-redux';

export const Home = () => {
    const { menuIsOpen } = useSelector(useReducers => useReducers.mobileReducer);

    return (
        <Styled.Container>
            <Menu />
            {menuIsOpen && (
                <MenuMobile />
            )}

            <Styled.SectionContainer bg={true}>
                Teste
            </Styled.SectionContainer>

            <Styled.SectionContainer>
                Teste
            </Styled.SectionContainer>

            <Styled.SectionContainer bg={true}>
                Teste
            </Styled.SectionContainer>

            <Styled.SectionContainer>
                Teste
            </Styled.SectionContainer>
            
        </Styled.Container>
    );
};
