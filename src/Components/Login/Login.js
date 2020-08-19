import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
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
    
  }


  render() {
    return(
      <section>
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
      <button onSubmit={this.submitHandler}>Submit</button>
      </section>
    )
  }
}

export default Login