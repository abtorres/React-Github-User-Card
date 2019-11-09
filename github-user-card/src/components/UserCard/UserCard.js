import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    // width: 100%;
`

const UserCard = (props) => {
    return (
        <Container>
            <Card avatar={props.avatar} name={props.name} userName={props.userName} publicRepos={props.publicRepos}/>
        </Container>
    )
}

export default UserCard;