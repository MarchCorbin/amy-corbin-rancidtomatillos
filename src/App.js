import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Movies from './Components/Movies/Movies.js';
import Login from './Components/Login/Login'
import MovieInfo from './Components/MovieInfo/MovieInfo'
import { postLogin, fetchUserMovieRatings } from './Api.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      userId: 0,
      userRatings: [],
      isLoggedIn: false
    }
  }

setCurrentUser = (data) => {
  this.setState({ currentUser: data.user.name, userId: data.user.id, isLoggedIn: true})
  this.getUserMovieRatings()
  // console.log('current', this.state.currentUser)
}

getUserMovieRatings = () => {
  let id = this.state.userId
  fetchUserMovieRatings(id)
  .then(data => this.setState({userRatings: data.ratings }))
}

changingMessage = () => {
  if (this.state.isLoggedIn) {
    this.changeValid()
    return <h2>Welcome {this.state.currentUser}</h2>
  } else {
    return <h2>Welcome</h2>
  }
}

toggleButton = () => {
  return this.state.isLoggedIn ? <button className="login-button">Logout</button> : <Link className="login-button" to='/login'><button className="login-button">Log In</button></Link>
}

changeValid() {
 return true
}

  render() {
    let personalizedMessage = this.changingMessage();
    return (
      <main>
        <BrowserRouter>
        <Route path='/login' >
          <Header />
          <Login setCurrentUser={this.setCurrentUser} />
          </Route>
          <Route path='/movies/:id' 
          render={(props) => <MovieInfo {...props} />} />
          
          <Route exact path='/'>
            <Header changingMessage={personalizedMessage} toggleButton={this.toggleButton()} />
            <Movies />
          </Route>
        </BrowserRouter>
      </main>
    );
  }
}
// this.changing message would have 2 tests, if stae is logged in and h2 w cuureent users name returened and isState logged in is flase straight welcome
// dont have to call compdidm, when page renders, data should be there (like constructor)
// mock fetch

export default App;
