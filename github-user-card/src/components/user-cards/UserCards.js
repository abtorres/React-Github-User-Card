import React from 'react';
import styled from 'styled-components';
import FollowerCards from '../FollowerCards/FollowerCards';
import UserCard from '../UserCard/UserCard';

const Cards = styled.div`
    background-color: yellow;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const UserCards = (props) => {
    return (
        <Cards>
            <UserCard avatar={props.data.avatar_url} name={props.data.name} userName={props.data.login} publicRepos={props.data.public_repos} />
            <FollowerCards following={props.data.following_url} />
        </Cards>
    )
}

export default UserCards;