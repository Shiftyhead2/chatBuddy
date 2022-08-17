import React from 'react';
import {auth} from "../firebase";

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
    <div className='text-white flex flex-col items-center mx-4 gap-1'>
      <button className='bg-green-500 px-6 py-1 rounded hover:bg-green-400 hover:text-gray-800 transition-all duration-150 ease-out'
      onClick = {handleClick}>Sign Out</button>
    </div>
  );
}

export default UserDisplay;