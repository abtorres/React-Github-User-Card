import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: lightgreen;
    background-color: orange;
    margin: 0;
    font-size: 50px;
    padding: 20px;
`;

const Header = () => {
    return(
        <Title>GitHub User Card</Title>
    )
}

export default Header;