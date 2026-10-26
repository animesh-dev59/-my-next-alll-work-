// import React from 'react';
import type { Iplayer } from './playerType';
// import { FaFlag, FaUser } from 'react-icons/fa';
import PlayerCard from './PlayerCard';
// import type { PlayersProps } from './Playaers';

const AvailablePlayers = ({players}) => { 
  // console.log(players , 'a');
  return (
    <div className='grid grid-cols-3 gap-4 mt-6'>  
     
      {    
        players.map((player:Iplayer, ind:number)=>{  
         return<PlayerCard key={ind} player={player}/>
        })
      }
      
    </div>
  );
};

export default AvailablePlayers; 





   

        
