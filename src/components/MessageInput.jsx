import React, {useState} from "react";
import { AiOutlineSend } from "react-icons/ai";
import { addMessage } from "../firebase";

const MessageInput = ({user}) => {
  const [value,setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage();
  }

  const setMessage = async() => {
    try{
        addMessage(user,value);
        setValue("");
    }catch(err){
        console.error(err);
    }
  }

  return (
    <form className="flex flex-row justify-between h-16  text-white items-center bg-stone-800 fixed bottom-0" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a message here"
        className="bg-stone-500 outline-none w-3/5 h-4/6 py-3 px-2 mx-3 placeholder:text-gray-200 md:w-4/5 rounded"
        value = {value}
        onChange = {handleInput}
      ></input>
      <button className="flex flex-row justify-center items-center h-4/6 mx-4 bg-green-500 hover:bg-green-400 hover:text-gray-800 px-3 py-2 rounded transition-all duration-150 ease-out">
        <AiOutlineSend />
        Send message
      </button>
    </form>
  );
};

export default MessageInput;
