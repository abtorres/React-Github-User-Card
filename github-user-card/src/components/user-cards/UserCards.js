import React from 'react';
import styled from 'styled-components';
import FollowerCards from '../FollowerCards/FollowerCards';

const Cards = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100vh;
`

const UserCards = (props) => {
    return (
        <Cards>
            <FollowerCards />
        </Cards>
    )
}

export default UserCards;