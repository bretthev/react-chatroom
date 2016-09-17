import React from 'react';
import Application from './Application';
import firebase from '../firebase';
import MessageInput from './MessageInput'


class UserList extends React.Component {
  constructor() {
    super();

    this.state = {
      users: null,
    }

  }

  render() {
    return (
      <section
        className="user-list">
        <h1>User List</h1>
        <MessageInput />
      </section>
    )
  }

}

export default UserList;
