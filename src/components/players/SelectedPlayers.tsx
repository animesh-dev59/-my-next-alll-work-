import React, { useState, type Dispatch, type SetStateAction } from 'react'; 
import type { Iplayer } from './playerType';
import SelectedPlayerCard from './SelectedPlayerCard';
 
interface ItypeProps{  
  coin:number; 
  setCoin:Dispatch<SetStateAction<number>>
  selectedPlayers:Iplayer[];
  setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayers = ({
     coin,
     setCoin ,
     selectedPlayers ,
     setSelectedPlayers
    }:ItypeProps) => { 
  console.log(selectedPlayers , 'from selected player'); 
     
  if(selectedPlayers.length === 0){ 
    return <h2 className='text-2xl text-red-600 font-bold text-center p-5 '>No Player a Data.</h2>
  }
  
   
  
  return (
    <div>
      Selected players  
     <div className='gird grid-cols-1 py-2 '>   
        { 
        selectedPlayers.map((player:Iplayer , ind:number) => { 
        
          return( 
            <> 
            <SelectedPlayerCard 
            key={ind}
             player={player}
             coin={coin} 
             setCoin={setCoin} 
             selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}/>
            </>
          )
      })}
     </div>
    </div>
  );
};

export default SelectedPlayers;