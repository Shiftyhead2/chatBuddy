import React from "react";
import { FaGoogle } from "react-icons/fa";
import {auth, GoogleProvider} from "../firebase";
import {signInWithPopup} from "firebase/auth";

const SignIn = ({setUser}) => {
  const handleClick = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }

  const signInWithGoogle = async() => {
    try{
      const res = await signInWithPopup(auth,GoogleProvider);
      const user = await res.user.toJSON();
      setUser(user);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <button className="text-white bg-green-500 h-8 px-8 py-5 flex items-center gap-2 mx-4 my-1 rounded hover:bg-green-400 hover:text-gray-800 transition-all duration-150 ease-out"
    onClick={handleClick}>
      <span className="text-lg font-bold">Sign in with:</span>
      <FaGoogle className="text-2xl" />
    </button>
  );
};

export default SignIn;
