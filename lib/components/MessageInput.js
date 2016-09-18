import React from 'react';
import Application from './Application';
import firebase, { database } from '../firebase';
const auth = firebase.auth();


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
      database.push({
                    timestamp: Date.now(),
                    text: this.state.messageInput,
                    user: {uid: auth.currentUser.uid, name: auth.currentUser.displayName, email: auth.currentUser.email} 
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
