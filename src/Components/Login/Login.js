import React from 'react'
import { postLogin } from '../../Api.js'
import './Login.scss'
import { withRouter, Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
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
       .catch(err => console.log(err))
      .then(() => this.clearInputs())
      .then(this.setState({isValid: true}))
  }


  render() {
    return(
      <section className='login-form-container'>
    <form id="login-form" id="login-form-input" aria-label="user login">
      <input id="username-input" aria-label="username input" class="login-input" type="username" placeholder="Username" name="email"
        onChange={this.changeHandler}
        value={this.state.email}
      />
      <input id="password-input" aria-label="password" class="login-input" type="password" placeholder="Password" name="password"
        onChange={this.changeHandler}
        value={this.state.password}
      />
      <button class="submit-button" onClick={this.submitHandler}>Submit</button>
      {this.state.isValid && <Redirect to="/" />}
      </form>
      </section>
    )
  }
}

export default withRouter (Login)