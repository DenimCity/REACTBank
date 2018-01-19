import React from 'react'
import {Link} from 'react-router-dom'




class DebitsPage extends Component {

const DebitsPage = (props)=> {
  return (
    <div>
      <h1>DebitsPage.js</h1>
    <Link to="/">Back to Home</Link>
    <AccountBalance accountBalance={props.accountBalance}/>



    </div>
  )
}

}










export default DebitsPage



