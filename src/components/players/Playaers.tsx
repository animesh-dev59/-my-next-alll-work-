import React, { use } from 'react';
import type { Iplayer } from './playerType';
import AvailablePlayers from './AvailablePlayers';
 export interface PlayersProps { 
  playersPromise:Promise<Iplayer[]>
}

const Playaers = ({playersPromise}:PlayersProps) => { 
  // console.log(playersPromise); 
  const players = use(playersPromise);
  // console.log(players.s ,'players')
  return (
    
    <div  className='container mx-auto'>   
      <div className='flex justify-between gap-4 my-4'> 
             <h2 className='font-bold text-xl'>Available Players</h2>
             <div> 
              <button className='btn btn-success'>Available</button>
             <button className='btn btn-primary'>Selected </button>
             </div>
            </div> 
      <AvailablePlayers players={players}/>
      
    </div>
  );
};

export default Playaers;