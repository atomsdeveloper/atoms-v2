import * as Styled from './styles';

import { useEffect, useState } from 'react';

export const Link = ( )  => {
    const [links, setLinks] = useState([]);
    
    useEffect(() => {
        const getLinks = async () => {
            try {
                const response = await fetch('./json/links.json');
                const data = await response.json();
                return setLinks(data);
            } catch (error) {
                console.error('Erro ao buscar links:', error);
            }
        };
        getLinks();
    }, []);
    
    return (
        <Styled.Container>
            {links.map((link) => (
                <Styled.List key={link.href}>
                    <Styled.LinkContainer href={link.href}> {link.text} </Styled.LinkContainer>
                </Styled.List>
            ) )}
        </Styled.Container>
    );
};
