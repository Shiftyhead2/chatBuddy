import React from 'react';
import {auth} from "../firebase";
import {FaUserCircle} from "react-icons/fa";

const UserDisplay = ({user,setUser}) => {

  const handleClick = (e) => {
    e.preventDefault();
    auth.signOut()
    .then(() => {
      setUser(null);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className='text-white flex flex-col items-center mx-4 gap-2'>
      <button className='bg-green-500 flex items-center gap-1 px-1.5 sm:px-3.5 md:px-6 text-xs sm:text-sm md:text-base py-1 rounded md:font-bold hover:bg-green-400 hover:text-gray-800 transition-all duration-150 ease-out'
      onClick = {handleClick}>
        <span>Sign Out</span>
        <FaUserCircle />
        </button>
    </div>
  );
}

export default UserDisplay;