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
    <form className="flex flex-row justify-between h-16  text-white  items-center bg-stone-800 fixed bottom-0 z-10" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a message here"
        className="bg-stone-500 outline-none w-4/5 h-4/6 py-3 px-2 mx-3 placeholder:text-gray-200 placeholder:md:text-lg placeholder:sm:text-sm placeholder:text-xs  rounded"
        value = {value}
        onChange = {handleInput}
        min = "1"
        max = "250"
      ></input>
      <button className="flex flex-row gap-2 justify-center items-center lg:font-bold  h-4/6 mx-4 bg-green-500 hover:bg-green-400 hover:text-gray-800 px-3 py-2 rounded transition-all duration-150 ease-out">
        <span className="text-xs  md:text-sm">Send message</span>
        <AiOutlineSend className="text-sm sm:text-lg md:text-xl" />
      </button>
    </form>
  );
};

export default MessageInput;
