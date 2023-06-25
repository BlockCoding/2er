import React, { Component } from 'react'
import '../Auth/SignUp.css'
class SignUp extends Component {
    state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e) => {
        e.preventDefault(); 
        console.log(this.state); 
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h5>Create Account</h5>
            <div className="input-field">
                <label htmlFor="firstName">first Name</label>
                <input type="text" id='firstName' onChange={this.handleChange} placeholder='Devil'/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">lastName</label>
                <input type="text" id='lastName' onChange={this.handleChange} placeholder='Sultan'/>
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} placeholder='Email Address'/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} placeholder='***********'/>
            </div> 
            <div className="input-field">
                <button className="btn">Create Account</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp
