import React, {Component} from 'react'

//the account balance is create render "balance" 
//the balance will render the data assigned to it from accountBalance data
//the data of accountBalance is created at the top level of the react file in the App.js

export default class AccountBalance extends Component {
  render() {
    return (
        <div>
          <h2>Balance: {this.props.accountBalance}</h2>
        </div>
    );
  }
}

