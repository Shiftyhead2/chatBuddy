import React from 'react';

const Message = ({message, user}) => {

  const messageClass = message.UID === user.uid ? "bg-green-600" : "bg-rose-600";

  return (
      <div>
          <p className='text-sm md:text-base px-3'>{user.uid === message.UID ? "You:" : `${message.displayName}:`}</p>
          <div className='inline-flex  flex-col px-3 max-w-xs sm:max-w-md md:max-w-xl break-words '>
            <div className={`rounded-xl ${messageClass}  px-3 py-1 mx-2`}>
              <p className="text-sm md:text-base">{message.text}</p>
            </div>
          </div>
      </div>
  );
}

export default Message;