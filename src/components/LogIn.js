import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
export default class LogIn extends Component {
  
  state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  
    
//this handles the the form submission
  handleChange = (event) => {
    //make a copy of the current user
    const updatedUser = {...this.state.user}
    //capture the name in the user field
    const inputField = event.target.name
    //capture the typed in values
    const inputValue = event.target.value
    //and update the current user
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (event) => {
    //prevent whatever you were about to do, dont do we are going to do our own thing
    // we need this line so that it can actually push the form
    event.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" 
            onChange={this.handleChange} 
            alue={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

 