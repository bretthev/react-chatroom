import React from 'react';
import Application from './Application';
import firebase from '../firebase';
import User from './User';
import MessageList from './MessageList'
import { map, uniqWith, isEqual } from 'lodash';
const databasee = firebase.database();
const auth = firebase.database();


class UserList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: []
    }
  }


  // filterByUser={this.props.filterByUser}
  render() {
    const users =[];
    map(this.props.messages, (message) => {
      users.push(message.user);
    });
    const uniqueUsers = (_.uniqWith(users, _.isEqual));
    const displayUsers = map(uniqueUsers, (user) => {
      return <User user={user}
                  userName = {user.name}
                  />
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
