import React from 'react';
import firebase, { database } from '../firebase';
import UserList from './UserList';


class User extends React.Component {
  constructor(props){
    super();

  }

  render() {
    console.log(this.props)
    return(
      <li className="User">
         <p>{this.props.user}</p>
       </li>
    )
  }
}

export default User;
