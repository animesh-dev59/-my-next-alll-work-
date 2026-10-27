// import React from 'react';
import type { Iplayer } from './playerType';
// import { FaFlag, FaUser } from 'react-icons/fa';
import PlayerCard from './PlayerCard';
import type { Dispatch, SetStateAction } from 'react';
// import type { PlayersProps } from './Playaers';
 interface IProps { 
   players:Iplayer[];
   coin:number;
   setCoin:Dispatch<SetStateAction<number>> ;
   selectedPlayers:Iplayer[];
   setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
 } 

const AvailablePlayers = ({players , coin , setCoin , selectedPlayers, setSelectedPlayers}:IProps) => {  
  // console.log(coin,'coin');
  // console.log(setCoin,'setCoin');
  // console.log(players , 'a');
  return (
    <div className='grid grid-cols-3 gap-4 mt-6'>  
     
      {    
        players.map((player:Iplayer, ind:number)=>{  
         return<PlayerCard key={ind} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
        })
      }
      
    </div>
  );
};

export default AvailablePlayers; 





   

        
