import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 50%;
    
`

const Information = styled.div`
    background-color: green;
    height: 200px;
`

const UserImage = styled.img`
    background-color: blue;
    height: 200px;
    width: 50%;
    display: flex;
`

const UserInfo = styled.div`
    width: 100%;
`

const Card = (props) => {
    return (
        <Container>
            <Information>
                <UserImage />
                <UserInfo>

                </UserInfo>
            </Information>
        </Container>
    )
}

export default Card;