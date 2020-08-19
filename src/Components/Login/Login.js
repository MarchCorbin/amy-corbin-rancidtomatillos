import React from 'react'
import { postLogin } from '../../Api.js'
import './Login.scss'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
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
    
  }


  render() {
    return(
      <section className='login-form'>
      <input
        type='text'
        placeholder="Email"
        name="email"
        onChange={this.changeHandler}
        value={this.state.email}
      />

      <input
        type='password'
        placeholder="Password"
        name="password"
        onChange={this.changeHandler}
        value={this.state.password}
      />
      <button onClick={this.submitHandler}>Submit</button>
      </section>
    )
  }
}

export default Login