import React,{useEffect,useRef} from 'react';
import Message from './Message';

const MessageList = ({messages,user}) => {

  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  },[messages]);


  return (
    <div className='text-white flex flex-col  gap-2 my-16  md:my-20  relative'>
      {messages && messages.map(msg => <Message key={msg.ID} message = {msg} user = {user} />)}
      <div ref = {messageEndRef}></div>
    </div>
  );
}

export default MessageList;