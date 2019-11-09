import React from "react";
import styled from "styled-components";
import Card from '../Card/Card';
import axios from 'axios';
import uniqueId from 'react-html-id';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    // width: 100%;
    flex-direction: column;
`

class FollowerCards extends React.Component {
    constructor(props) {
        super(props);
        uniqueId.enableUniqueIds(this);
        this.state = {
            data: [],
        }
        //bindings
    }



    componentDidMount() {
        axios.get('https://api.github.com/users/abtorres/following')
            .then(response => {
                this.setState({data: response.data})
            })
            .catch(error => console.log(error))
    }

    render() {
        const data = this.state.data;
        console.log(data)
        return (
            <Container>
                {data.map(follower => <Card key={this.nextUniqueId()} avatar={follower.avatar_url} name={follower.name} userName={follower.login} publicRepos={follower.publicRepos} />)}
            </Container>
    )}
}
// const FollowerCards = (props) => {    
//     return (
//         <Container>
//             <Card />
//         </Container>
//     )
// }

export default FollowerCards;