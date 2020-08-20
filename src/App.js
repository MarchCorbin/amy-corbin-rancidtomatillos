import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Movies from './Components/Movies/Movies.js';
import Login from './Components/Login/Login'
import { postLogin, fetchUserMovieRatings } from './Api.js'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      userId: 0,
      userRatings: []
    }
  }

setCurrentUser = (data) => {
  this.setState({ currentUser: data.user.name, userId: data.user.id })
  this.getUserMovieRatings()
  // console.log('current', this.state.currentUser)
}

getUserMovieRatings = () => {
let id = this.state.userId
fetchUserMovieRatings(id)
.then(data => this.setState({userRatings: data.ratings }))
}

  render() {
    return (
      <main>
        <BrowserRouter>
        <Route path='/login' >
          <Header />
          <Login setCurrentUser={this.setCurrentUser} />
          </Route>
          <Route exact path='/'>
            <Header currentUser={this.state.currentUser}/>
            <Movies />
          </Route>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
