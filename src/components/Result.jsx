import React, { useEffect } from 'react';
import { useAuth } from '../Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const {logout} = useAuth();
  const navigate = useNavigate();
  const handleLogout =() =>{
    logout();
    navigate('/')
  }
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <h2 className='text-3xl md:text-5xl font-bold text-center  '>Welcome! Best of Luck</h2>
            <img  className="mt-6 rounded-md w-72 md:w-auto" src="https://images.unsplash.com/photo-1631090164714-3336f1fa5315?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lzaCUyMGdpZnR8ZW58MHx8MHx8fDA%3D" alt="" />
            <button  className="bg-sky-400 mt-5 p-2  w-28 md:w-48   flex justify-center  text-xl md:text-3xl rounded-md shadow-xl font-bold text-white"  onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Result;