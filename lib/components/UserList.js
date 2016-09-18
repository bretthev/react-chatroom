import React from 'react';
import Application from './Application';
import firebase from '../firebase';
import User from './User';
import { map, uniqBy } from 'lodash';
const databasee = firebase.database();
const auth = firebase.database();


class UserList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: []
    }
  }

  render() {
    const users =[];
    map(this.props.messages, (message) => {
      users.push(message.user);
    });
    const uniqueUsers = [...new Set(users.map(user => user.email))];
    const displayUsers = map(uniqueUsers, (user) => {
      return <User user={user}/>
      }

    );

    return (
      <ul>
      {displayUsers}
      </ul>
    )
  }

}

export default UserList;
