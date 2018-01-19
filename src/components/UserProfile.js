import React, {Component} from 'react'
import {Link} from 'react-router-dom'

//we imported REACT, into every component
//we have created a User Probile that will render
// the username, and member since
//to create a link to another page we must import the {Link}compent 
//and use the <Link to="">"Name of place"</Link>

export default class UserProfile extends Component {
render() {
return (
<div>
      <h1>User Profile</h1>
      <div>Username: {this.props.userName}</div>
      <div>Member Since: {this.props.memberSince}</div>
      <div>
            
      </div>
      <Link to="/">Home</Link>
</div>
)}}
