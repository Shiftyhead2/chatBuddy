import React from 'react';
import Message from './Message';

const MessageList = ({messages,user}) => {
  return (
    <div className='text-white flex flex-col  gap-2 my-24 mx-1 relative'>
      {messages && messages.map(msg => <Message key={msg.ID} message = {msg} user = {user} />)}
    </div>
  );
}

export default MessageList;