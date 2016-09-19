import React from 'react';
import Application from './Application';
import MessageList from './MessageInput';
import firebase from '../firebase';

class MessageFilters extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const messages = this.props.messages
    return (
      <section>
        <input className="filter"
        placeholder="search messages"
        onChange={(e) => this.props.handleFilter()}
        />
      </section>
    )
  }
}



export default MessageFilters
