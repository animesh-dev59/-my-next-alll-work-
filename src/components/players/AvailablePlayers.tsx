import React from 'react';
import type { Iplayer } from './playerType';

const AvailablePlayers = ({players}) => { 
  // console.log(players , 'a');
  return (
    <div className='container mx-auto'>  
     <div className='flex justify-between gap-4'> 
       <h2 className='font-bold text-xl'>Available Players</h2>
       <div> 
        <button className='btn btn-success'>Available</button>
       <button className='btn btn-primary'>Selected </button>
       </div>
      </div> 
      {    
        players.map((player:Iplayer)=>{ 
          return <div> 
            {player.playerName}
          </div>
        })
      }
      
    </div>
  );
};

export default AvailablePlayers;