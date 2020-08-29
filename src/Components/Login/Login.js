import React from 'react'
import { postLogin } from '../../Api.js'
import './Login.scss'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isValid: false
    }
  }

  clearInputs= () => {
    this.setState({email: '', password: ''})
  }

  changeHandler = (e) => {
   const inputName =  e.target.name
   this.setState({[inputName]: e.target.value})
  }

  submitHandler = (e) => {
    const loginEmail = this.state.email
    const loginPassword = this.state.password
    postLogin(loginEmail, loginPassword)
    .then(data => this.props.setCurrentUser(data))
    .then(() => this.clearInputs())
     .then(this.setState({isValid: true}))
     .catch(err => console.log(err))
  }


  render() {
    return(
      <section className='login-form-container'id="login-form">
      <input id="username-input" aria-label="username input" className="login-input" type="username" placeholder="Username" name="email"
        onChange={this.changeHandler}
        value={this.state.email}
      />
      <input id="password-input" aria-label="password" className="login-input" type="password" placeholder="Password" name="password"
        onChange={this.changeHandler}
        value={this.state.password}
      />
      <button className="submit-button" onClick={this.submitHandler}>Submit</button>
      {this.state.isValid && <Redirect to="/" />}
      </section>
    )
  }
}

export default Login

Login.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
}