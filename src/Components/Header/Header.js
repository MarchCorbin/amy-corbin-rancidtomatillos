import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    console.log(this.props, 'props')
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

// think of brwoser history as an array
//adding things to array when click link
// using rrd to change path
// console.log 