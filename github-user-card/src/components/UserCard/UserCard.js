import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const UserCard = (props) => {
    return (
        <Container>
            <Card avatar={props.avatar}/>
        </Container>
    )
}

export default UserCard;