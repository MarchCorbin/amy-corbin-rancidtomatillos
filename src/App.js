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

setCurrentUser = async(data) => {
  this.setState({ currentUser: data.user.name, userId: data.user.id, isLoggedIn: true})
  await this.getUserMovieRatings()
  // console.log('current', this.state.currentUser)
}

componentDidUpdate = (prevProps) => {
  prevProps.userRatings !== this.props.userRatings && this.setState({userRatings: this.state.userRatings})
}

getUserMovieRatings = async() => {
  let id = this.state.userId
  await fetchUserMovieRatings(id)
  .then(data => this.setState({userRatings: data.ratings }))
}

changingMessage = () => {
  if (this.state.isLoggedIn) {
    return <h2>Welcome, {this.state.currentUser}!</h2>
  } else {
    return <h2>Welcome</h2>
  }
}


logOutUser = () => {
  this.state.isLoggedIn &&
  this.setState({currentUser:'', userId: 0, userRatings:[], isLoggedIn: false})
}

toggleButton = () => {
  return this.state.isLoggedIn ? <button onClick={this.logOutUser} className="login-button">Logout</button> : <Link className="login-button" to='/login'><button className="login-button">Log In</button></Link>
}



  render = () => {
    let ratings;
    if(this.state.userRatings.length){ratings = this.state.userRatings}
    let personalizedMessage = this.changingMessage();
    console.log(this.state.userRatings, 'thisisratings')

    return (
      <main>
        <BrowserRouter>
        <Route path='/login' >
          <Header />
          <Login setCurrentUser={this.setCurrentUser} />
          </Route>
          <Route path='/movies/:id' 
          render={(props) =>
          <MovieInfo getUserMovieRatings={this.getUserMovieRatings} changingMessage={personalizedMessage} userId={this.state.userId} toggleButton={this.toggleButton()}  {...props} />} 
          />
          
          <Route exact path='/'>
            <Header changingMessage={personalizedMessage} toggleButton={this.toggleButton()} />
            <Movies userRatings={this.state.userRatings} />
          
  
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
