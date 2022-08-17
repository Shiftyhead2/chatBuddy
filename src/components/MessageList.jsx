import React from 'react';
import Message from './Message';

const MessageList = ({messages,user}) => {
  return (
    <div className='text-white flex flex-col gap-1 my-1'>
      {messages && messages.map(msg => <Message key={msg.ID} message = {msg} user = {user} />)}
    </div>
  );
}

export default MessageList;