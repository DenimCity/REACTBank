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

//importing axios to organize a promie based library that makes API calls for REACT 
import axios from 'axios'
//this import is importing the Debits page and allows me to mount the debits page component
import DebitsPage from './components/DebitsPage'




export default class App extends Component {

  state = {
    accountBalance: 14568.27,
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    },
    //here we are staging the debits information we are pulling in as empty array
    debits:[],
  } 
//here we are usign axios to grap our data from an API
  getDebits = () => {
    //axios grabs the link
    axios.get('http://localhost:4000/debits')
    //and we are awaiting a response to be given
    .then((response)=>{
//the response of the data were are attaching it to the variable  'debits'
      const debits = response.data
      //now we are setting the state debits
      this.setState({debits})
      //but if we cannot grab that error we are going to print a error message in the console.
    }).catch((erros)=> {
      console.log('We didnt get the Debits Data')
    })
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

  const DebitsPageComponent = () => (
    <DebitsPage
    debits={this.state.debits}/>
  )

    return (
      //Router, Switch and Route is apart of a library that you imported using npm i react-router-dom
        <Router>
         {/* / //Switch allows only one route to render at a time and easily switch bewtween */}
          <Switch>
        {/* //the routes declare the path the user will go to based o nthe path definiton */}
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsPageComponent}/>
          </Switch>
        </Router>
    )
  }
}

