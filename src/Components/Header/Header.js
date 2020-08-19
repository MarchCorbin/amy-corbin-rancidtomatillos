import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header className="header">
        <h1>Perished Durians</h1>
        <button className="login-button">Log In</button>
      </header>
    )
  }
}

export default Header