// import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import { AiFillDollarCircle } from 'react-icons/ai';
const Nav = ({coin}:{coin:number}) => {   
  
  return (
    <>  
    <div className=' bg-red-200'> 
      <nav className="flex justify-between items-center container mx-auto">   
       <img src={Logo} alt="" /> 
       <ul className='flex gap-4 items-center'> 
        <li>Home</li> 
        <li>Fixture</li>
        <li>Players</li>
        <li>Dem Players</li>
       </ul>
       <strong className='font-bold text-3xl flex gap-1 items-center text-black-500'>{coin} <AiFillDollarCircle className='text-yellow-400' />
</strong>  

     </nav>
    </div>
    </>
  );
};

export default Nav;