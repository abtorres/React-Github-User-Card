import React from 'react';
import styled from 'styled-components';
import FollowerCards from '../FollowerCards/FollowerCards';
import UserCard from '../UserCard/UserCard';

const Cards = styled.div`
    background-color: yellow;
    width: 100%;
    display: flex;
`

const UserCards = (props) => {
    console.log(props.data)
    return (
        <Cards>
            <UserCard avatar={props.data.avatar_url}/>
            <FollowerCards followers={props.data.followers_url}/>
        </Cards>
    )
}

export default UserCards;