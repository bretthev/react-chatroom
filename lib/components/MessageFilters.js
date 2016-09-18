import React from 'react';
import Application from './Application';
import MessageInput from './MessageInput';
import firebase from '../firebase';

class MessageFilters extends React.Component {
  constructor(props) {
    super();
    this.state = {
      order: 'chronological'
    }
  }

  render() {
    return (
      <section>
        <button
        className="sort-up">
        Sort Up
        </button>
        <button
        className="sort-down">
        Sort Down
        </button>
      </section>
    )
  }
}



export default MessageFilters
