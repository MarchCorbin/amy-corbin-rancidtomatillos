import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header className="header">
        <h1>Perished Durians</h1>
        <Link className="login-button" to='/login'><button className="login-button">Log In</button></Link>
      </header>
    )
  }
}

export default Header