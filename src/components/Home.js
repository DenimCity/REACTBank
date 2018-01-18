import React, { Component } from 'react';
import AccountBalance from './AccountBalance'    
import {Link} from 'react-router-dom'    
//te home componet will he the "homePage"
//and imported the Account balance component 
//to account balance will load whe nthe homepage path or view is called 
//the home page will display a image 
//a header of Bank of React in 
// and we have mounted AccountBalance
//the mounted AccountBalance will import props set by accountBalance data
//the data for this prop is stored in the App Js 
// but here we have imported this prop creat in the AccountBalance Component
//to create a link to another page we must import the {Link}compent 
//and use the <Link to="">"Name of place"</Link>

export default class Home extends Component {
      render() {
        return (
            <div>
              <img width="200px" src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
              <h1>Bank of React</h1>
              <Link to="LogIn/"> Login in</Link>
              <div>
              </div>
              <Link to="/userProfile">User Profile</Link>
              <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
      }
    }

    