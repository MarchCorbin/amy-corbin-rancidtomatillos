import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Movies from './Components/Movies/Movies.js';
import Login from './Components/Login/Login'
import { postLogin } from './Api.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      userId: 0
    }
  }

setCurrentUser = (data) => {
console.log(data, 'WEMADEIT')
    this.setState({ userId: data.user.id })
}

  render() {
    return (
      <main>
        <Login setCurrentUser={this.setCurrentUser} />
        {/* <Header />
        <Movies /> */}
      </main>
    );
  }
}

export default App;
