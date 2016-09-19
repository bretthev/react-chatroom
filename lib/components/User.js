import React from 'react';
import firebase, { database } from '../firebase';
import UserList from './UserList';
import MessageList from './MessageList';


class User extends React.Component {
  constructor(props){
    super();
  }

  // onClick={(e) => this.props.filterByUser(name)}
  render() {
    const name = this.props.user.name
    return(
      <li
        className="User"
        key={this.props.user.uid}
        >
         <p>{this.props.user.name}</p>
       </li>
    )
  }
}

export default User;
