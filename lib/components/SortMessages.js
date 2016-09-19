import React from 'react';
import Application from './Application';
import firebase, { database, auth } from '../firebase';
import { pick, map, extend } from 'lodash';
import MessageList from './MessageList';

class SortMessages extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const  activeMessages = this.props.activeMessages
    return(
      <section>

      <button
        onClick={() => this.props.handleSortUp()}
        className="sort-up">
          Chronological
      </button>

      <button
        onClick={() => this.props.handleSortDown()}
        className="sort-down">
          Reverse-Chronological
      </button>
      </section>
    )
  }

}

export default SortMessages;
