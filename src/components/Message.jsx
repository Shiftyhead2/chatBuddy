import React from 'react';

const Message = ({message, user}) => {

  const messageClass = message.UID === user.uid ? "bg-green-600" : "bg-rose-600";

  return (
      <div>
          <div className='inline-block  flex-col px-2 max-w-xl break-words'>
            <p className='text-sm'>{user.uid === message.UID ? "You:" : `${message.displayName}:`}</p>
            <div className={`rounded-xl ${messageClass} px-3 py-1`}>
              <p className="text-base">{message.text}</p>
            </div>
          </div>
      </div>
  );
}

export default Message;