import React from 'react';
import firebase, { database, auth } from '../firebase';
import MessageList from './MessageList';
const moment = require('moment');

class Message extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <li>
        <p>{this.props.timestamp}</p>
        <p>{this.props.user.name}: {this.props.text}</p>
      </li>
    )
  }
}

export default Message;

// export default function Message ({ message }) {
//   console.log({message})
//   return (
//     <li>
//       <p> </p>
//       <p> {message.user.name}: {message.text} </p>
//     </li>
//   )
// }
