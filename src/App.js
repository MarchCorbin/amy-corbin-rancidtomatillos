import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Movies from './Components/Movies/Movies.js';
import Login from './Components/Login/Login'

import MovieInfo from './Components/MovieInfo/MovieInfo'
import Favorites from './Components/Favorites/Favorites.js'
import { fetchUserMovieRatings, postToFavorites } from './Api.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      userId: 0,
      userRatings: [],
      favorites: [],
      isLoggedIn: false
    }
  }

setCurrentUser = async(data) => {
  this.setState({ currentUser: data.user.name, userId: data.user.id, isLoggedIn: true})
  await this.getUserMovieRatings()
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

toggleFavButton = () => {
  return this.state.isLoggedIn && <Link className='fav-button' to='/favorites'><button className='fav-button'>My Favorites</button></Link>
}

addToFavorites = async(movieId) => {
  await postToFavorites(movieId)
  .then(data => this.setState({favorites:data}))
}


  render = () => {
    let personalizedMessage = this.changingMessage();
    return (
      <main>
        <BrowserRouter>
        <Route path='/login' >
          <Header />
          <Login setCurrentUser={this.setCurrentUser} />
          </Route>
          <Route path='/movies/:id' 
          render={(props) =>
          <MovieInfo addToFavorites={this.addToFavorites}  userRatings={this.state.userRatings} getUserMovieRatings={this.getUserMovieRatings} changingMessage={personalizedMessage} userId={this.state.userId} toggleButton={this.toggleButton()}  {...props} />} 
          />
          <Route path='/favorites'>
            <Header changingMessage={personalizedMessage} toggleButton={this.toggleButton()} />
            <Favorites userRatings={this.state.userRatings} />

          </Route>
          <Route exact path='/'>
            <Header toggleFavButton={this.toggleFavButton()} changingMessage={personalizedMessage} toggleButton={this.toggleButton()} />
            <Movies userRatings={this.state.userRatings} />
          </Route>
        </BrowserRouter>
      </main>
    );
  }
}


export default App;
