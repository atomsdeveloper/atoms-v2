// import P from 'prop-types';
import * as Styled from './styles';

import { IoMenu } from "react-icons/io5";

import { useDispatch } from 'react-redux';

import { setMobileMenu } from '../../redux/mobile/slice';

import { Link } from "../Link"

export const NavLinks = () => {
    const dispatch = useDispatch();
   
    const handleMobileMenu = () => {
        dispatch(setMobileMenu())
    }

    return (
        <>
            <Styled.Container>
                <Link />
            </Styled.Container>
            <Styled.Button onClick={handleMobileMenu}>
                <IoMenu size={25} />
            </Styled.Button>
        </>
    );
};
