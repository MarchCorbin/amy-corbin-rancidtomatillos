import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import durian from "../../Assets/durianlogo.png"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section className="header-container">
        <header className="header">
        <section className="header-message">{this.props.changingMessage}</section>
          <Link className="link-name" to='/'><h1 className="title-name">Perished Durians</h1><img className="img-durian" alt="durian" src={durian}/></Link>
        <section className="login-b">{this.props.toggleButton}</section>
        <section className="fav-button-stn">{this.props.toggleFavButton}</section>
        </header>
      </section>
    )
  }
}

export default Header

