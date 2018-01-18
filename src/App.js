import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
//we have installed the react browser using this CL npm i react-router-dom
//and imported it into our App.js
//we creaded a Home route
//with then app.js we wil render that data from account balance to the homepage
//the homepage will render the route of the home path
//Remember the data for the account balance is set in the app.js 
//the current state of the account

//we added the to the state of the data the current users
// the name and date of inital membership




export default class App extends Component {

  state = {
    accountBalance: 14568.27,
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    }
  } 
  

  mockLogIn = (logInInfo) => {
    //spread operator copies the current user
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  

  render() {

    const HomeComponent = () => (
    <Home accountBalance={this.state.accountBalance}/>) 
// we created a variable HomeComponent because we cant directly mount it using 
//<Home accountBalance={this.state.accountBalance}
// but we can pass it in as a varibale with handlebars {  }
//which will mount it for us
const UserProfileComponent = () => (
<UserProfile userName={this.state.currentUser.userName} 
memberSince={this.state.currentUser.memberSince}/>)


const LogInComponent = () => (
  <LogIn 
  user={this.state.currentUser} 
  mockLogIn={this.mockLogIn} 
  {...this.props}/>)



    return (
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
          </Switch>
        </Router>
    )
  }
}

