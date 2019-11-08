import React from "react";
import styled from "styled-components";
import Card from '../Card/Card';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const FollowerCards = (props) => {
    return (
        <Container>
            <Card />
        </Container>
    )
}

export default FollowerCards;