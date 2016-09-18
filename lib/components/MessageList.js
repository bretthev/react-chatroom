import React from 'react';
import Application from './Application';
import firebase, { database, auth } from '../firebase';
import { pick, map, extend } from 'lodash';
import Message from './Message';
import MessageFilters from './MessageFilters';


class MessageList extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: null,
    }
  }

  sortsMessagesInChronologicalOrder() {
    const { messages } = this.state
    console.log(messages);
  }

  componentDidMount() {
    database.limitToLast(100).on('value', (snapshot) => {
        const messages = snapshot.val() || {};
        this.setState({
          messages: map(messages, (val, key) => extend(val, { key }))
        });
      });
    }

  render() {
    const messages =  this.state;
    const displayMessages = map(this.state.messages, (message) => {return <Message {...message}/>})
    return(
      <section>
        <ul>
        {displayMessages}
        </ul>
      </section>
    )
  }
}

export default MessageList;
