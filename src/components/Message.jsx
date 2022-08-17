import React from 'react'

const Message = ({message, user}) => {

  const messageClass = message.UID === user.uid ? "bg-orange-800" : "bg-zinc-800";

  return (
    <div className= {`mx-1 flex flex-col`}>
      <div className={`rounded-md ${messageClass} w-full py-1.5`}>
          <div className='mx-2'>
            <p className='text-lg'>{user.uid === message.UID ? "You:" : `${message.displayName}:`}</p>
            <p className="text-base">{message.text}</p>
          </div>
      </div>
    </div>
  );
}

export default Message;