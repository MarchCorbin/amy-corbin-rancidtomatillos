import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  

  render() {
    return (
      <header className="header">
        <Link to='/'><h1>Perished Durians</h1></Link>
       {this.props.toggleButton}
    <section>{this.props.changingMessage}</section>
      </header>
    )
  }
}

export default Header

// think of brwoser history as an array
//adding things to array when click link
// using rrd to change path
// console.log 