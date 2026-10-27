import React, { useState, type Dispatch, type SetStateAction } from 'react'; 
import type { Iplayer } from './playerType';
 
interface ItypeProps{ 
  selectedPlayers:Iplayer[];
  setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayers = ({selectedPlayers , setSelectedPlayers}:ItypeProps) => { 
  console.log(selectedPlayers , 'from selected player');
  
  return (
    <div>
      Selected players 
    </div>
  );
};

export default SelectedPlayers;