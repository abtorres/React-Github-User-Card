import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import UserCards from './components/user-cards/UserCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
    //bindings

  }

  componentDidMount() {
    axios.get('https://api.github.com/users/abtorres')
      .then(response => {
        this.setState({data: response.data})
      })
      .catch(error => console.log(error))
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
