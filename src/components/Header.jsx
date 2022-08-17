import React from 'react';
import SignIn from "./SignIn";
import UserDisplay from "./UserDisplay";

const Header = ({user,setUser}) => {
  return (
    <div className="header flex justify-between items-center bg-stone-800 h-20">
        <p className= "text-white text-2xl mx-3">Chat away with:</p>
        <h1 className="text-yellow-500 text-4xl font-bold">Chatbuddy</h1>
        {user ? <UserDisplay user = {user} setUser = {setUser} /> : <SignIn setUser = {setUser} />}
    </div>
  );
}

export default Header;