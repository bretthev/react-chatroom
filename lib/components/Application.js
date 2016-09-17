import React, { Component } from 'react'
import firebase from '../firebase';
const auth = firebase.auth();
const database = firebase.database();
import { pick, map, extend } from 'lodash';
import UserList from './UserList';
import MessageFilters from './MessageFilters';
import MessageList from './MessageList';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      messages: [],
      users: [],
    }
  }

  loginWithGoogle() {
    let google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
    this.setState({ user: auth.currentUser })
  }

  getTotalUsers() {
    database.ref('messages').on('value', (snapshot) => {
      let messages = snapshot.val();
      let messagesUsers = messages.name;
      this.setState({ users: messagesUsers })
    })
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
    this.setState({ user: auth.currentUser });
    });
  }

  render() {
    return (
    <section>
      <MessageList />
      <UserList />
      <MessageFilters />
    </section>
  )
  }
}
