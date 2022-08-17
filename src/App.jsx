import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import React, { useState , useEffect} from "react";
import { doc, getDoc} from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [sentMessage,setSentMessage] = useState(false);
  const [messages,setMessages] = useState([]);

  useEffect(() => {
    if(sentMessage){
    }

  },[sentMessage])




  return (
    <div className="cont flex flex-col justify-between">
      <Header user={user} setUser={setUser} />
      {user ? <MessageList /> : <></>}
      {user ? <MessageInput user = {user} setSentMessage = {setSentMessage}/> : <></>}
    </div>
  );
}

export default App;
