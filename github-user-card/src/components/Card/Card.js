import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Information = styled.div`
    background-color: green;
    height: 200px;
    display: flex;
    width: 50%;
    margin: 20px;
`
const UserImage = styled.img`
    background-color: blue;
    height: 200px;
    width: 40%;
    display: flex;
    // background-image: ${props => `url(${props.avatar})`};
`

const UserInfo = styled.div`
    width: 100%;
    background: pink;
`
const UserName = styled.h2`
    
`
const Handle = styled.h2`

`
const SmallHandle = styled.h5`

`
const Repos = styled.p`

`

const Card = (props) => {
    return (
        <Container>
            <Information>
                <UserImage src={props.avatar}/>
                <UserInfo>
                    <UserName>{props.name}</UserName>
                    {props.name ? (
                        <SmallHandle>{props.userName}</SmallHandle>
                    ):(
                        <Handle>{props.userName}</Handle>
                    )}
                    {props.publicRepos &&
                        <Repos>Public Repos: {props.publicRepos}</Repos>
                    }
                </UserInfo>
            </Information>
        </Container>
    )
}

export default Card;