import React from 'react';
import Application from './Application';
import firebase, { database, auth } from '../firebase';
import { pick, map, extend } from 'lodash';
import Message from './Message';
import MessageFilters from './MessageFilters';
import SortMessages from './SortMessages';
import UserList from './UserList';


class MessageList extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: null,
      order: 'chronological',
      activeMessages: null
    }
  }

  showAllMessages() {
    const { messages } = this.state;
    this.setState({ activeMessages: messages })
  }

  putsMessagesInChronologicalOrder(messages) {
    debugger;
    const sortedMessages = messages.sort((a, b) => a.timestamp - b.timestamp);
    this.setState({ messages: sortedMessages, order: 'chronological' })
  }

  putsMessagesInReverseChronologicalOrder(messages) {
    debugger;
    const sortedMessages = messages.sort((a, b) => b.timestamp - a.timestamp);
    this.setState({ messages: sortedMessages, order: 'reverse-chronological' })
  }

filterMessagesByText(input) {
  const { messages } = this.state
  const result = messages.filter(function( message ) {
    return message.text.indexOf(input) != -1;
    });
  this.setState({ activeMessages: result })
}

filterMessagesByUser(name) {
  debugger;
  const { messages } = this.state
  const result = messages.filter(function( message ) {
    return message.user.name.indexOf( name ) != -1;
  })
  this.setState({ activeMessages: result })
}

  componentDidMount() {
    database.limitToLast(100).on('value', (snapshot) => {
        const messages = snapshot.val() || {};
        this.setState({
          messages: map(messages, (val, key) => extend(val, { key }))
        });
        this.setState({
          activeMessages: map(messages, (val, key) => extend(val, { key }))
        })
      });
    }

//goes after line 73 (UserList prop)
// filterByUser = {(e) => this.filterMessagesByUser}
  render() {
    const { messages, activeMessages } =  this.state;

    const displayMessages = map(this.state.activeMessages, (message) => {return <Message {...message}/>})

    return(
      <section>

      <UserList
      messages = {this.state.messages}
      />

      <input
        onChange={(e) => this.filterMessagesByText(event.target.value)}
        />

        <button
        onClick={() => this.filterMessagesByUser('Madison Kerndt')}
        >
        testMadison
        </button>

        <button
        onClick={() => this.filterMessagesByUser('Brett Hevia')}
        >
        testBrett
        </button>

        <button
        onClick={() => this.showAllMessages() }
        >
        Show All messages
        </button>

      <SortMessages
        activeMessages={activeMessages}
        handleSortUp={() => this.putsMessagesInChronologicalOrder (activeMessages)}
        handleSortDown={() => this.putsMessagesInReverseChronologicalOrder(activeMessages)}
      />

      <ul>
        {displayMessages}
      </ul>

      </section>

    )
  }
}

export default MessageList;
