import React from 'react';
import firebase, { database, auth } from '../firebase';
import MessageList from './MessageList';
import moment from 'moment'

class Message extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let time = this.props.timestamp;
    let realTime = moment(time).format("DD MMM YYYY hh:mm a")

    return(
      <li key={this.props.timestamp}>
        <p>{realTime}</p>
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
