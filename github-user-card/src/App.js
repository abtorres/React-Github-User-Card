import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import UserCards from './components/user-cards/UserCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    //bindings below

  }
  //do stuff below
  componentDidMount() {
    axios.get('https://api.github.com/users/abtorres')
      .then(response => {
        // console.log(response)
        this.setState({data: response.data})
        console.log(this.state.data)
      })
      .then(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserCards data={this.state.data}/>
      </div>
  )};
}

export default App;
