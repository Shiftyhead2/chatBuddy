import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import React, {useState} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore"
import {queryVar} from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [messages] = useCollectionData(queryVar,{idField: 'id'});

  return (
    <div className="main-div">
      <Header user={user} setUser={setUser} />
      <div className="cont">
        {user ? <MessageList messages={messages} user = {user} /> : <></>}
      </div>
      {user ? <MessageInput user = {user} /> : <></>}
    </div>
  );
}

export default App;
