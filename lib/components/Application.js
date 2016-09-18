import React, { Component } from 'react'
import firebase, { database } from '../firebase';
const auth = firebase.auth();
import { pick, map, extend } from 'lodash';
import UserList from './UserList';
import MessageFilters from './MessageFilters';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      messages: {},
      users: [],
    }
  }


  loginWithGoogle() {
    let google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
    this.setState({ user: auth.currentUser })
  }


  componentDidMount() {
     database.limitToLast(100).on('value', (snapshot) => {
       const messages = snapshot.val() || {};
       this.setState({
         messages: map(messages, (val, key) => extend(val, { key }))
       });
     });
     auth.onAuthStateChanged(user => this.setState({ user }));
   }

  render() {
    const { user, users } = this.state;

    return (
    <section>

    {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }

      <UserList
      messages = {this.state.messages}/>
      <MessageList />
      <MessageInput />

    </section>
    )
  }
}
