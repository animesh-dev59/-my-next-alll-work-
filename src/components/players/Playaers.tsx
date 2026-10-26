import React, { use } from 'react';
import type { Iplayer } from './playerType';
import AvailablePlayers from './AvailablePlayers';
interface PlayersProps { 
  playersPromise:Promise<Iplayer[]>
}

const Playaers = ({playersPromise}:PlayersProps) => { 
  // console.log(playersPromise); 
  const players = use(playersPromise);
  // console.log(players.s ,'players')
  return (
    
    <div> 
      <AvailablePlayers players={players}/>
      
    </div>
  );
};

export default Playaers;