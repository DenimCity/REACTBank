import React, {Component} from 'react';

//the account balance is create render "balance" 
//the balance will render the data assigned to it from accountBalance data
//the data of accountBalance is created at the top level of the react file in the App.js

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;