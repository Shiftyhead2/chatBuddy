import React from 'react';
import SignIn from "./SignIn";
import UserDisplay from "./UserDisplay";
import {SiGooglechat} from "react-icons/si";

const Header = ({user,setUser}) => {
  return (
    <div className="header flex justify-between items-center bg-stone-800 max-h-28 py-3 fixed top-0 z-10">
        <SiGooglechat className= "text-white text-sm sm:text-2xl mx-5 md:text-3xl" />
        <h1 className="text-green-500 text-base sm:text-3xl font-bold md:text-4xl">Chatbuddy</h1>
        {user ? <UserDisplay user = {user} setUser = {setUser} /> : <SignIn setUser = {setUser} />}
    </div>
  );
}

export default Header;