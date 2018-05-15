import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'



export default class DebitsPage extends Component {
render() {
  return (
    <div>
      <h1>Debits Page</h1>
      <Link to="/">Back to Home </Link>
      <AccountBalance accountBalance={props.accountBalance}/>


    </div>

  )}}
