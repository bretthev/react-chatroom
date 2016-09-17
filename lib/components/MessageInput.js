import React from 'react';
import Application from './Application';
import firebase from '../firebase';
const auth = firebase.auth();
const database = firebase.database();

class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      messageInput: ''
    }
  }

  getMessageInput(event) {
    this.setState({ messageInput: event.target.value });
  }

  clearMessageInput() {
    this.setState({messageInput: '' })
  }

  sendMessage() {
      database.ref('messages').push({
                    uid: auth.currentUser.uid,
                    name: auth.currentUser.displayName,
                    text: this.state.messageInput,
                    email: auth.currentUser.email,
                    timestamp: Date.now()
                  })
      this.clearMessageInput();
  }

  render() {
    return (
      <section>
        <input
          className="message-input"
          type="text"
          onChange={(event) => this.getMessageInput(event)}
          placeholder="Your message here."
          value={this.state.messageInput}
          />

        <p
        className="character-count">
          {this.state.messageInput.length}
        </p>

        <button
          className="submit-message"
          onClick={() => this.sendMessage()}>
          Send
        </button>

      </section>
    )
  }
}

export default MessageInput;
