import React, { type Dispatch, type SetStateAction } from 'react'; 
import type { Iplayer } from './playerType';
import { MdDelete } from 'react-icons/md';
interface ISelectedPlayerCardProps{ 
  player:Iplayer;
   coin:number; 
    setCoin:Dispatch<SetStateAction<number>>
    selectedPlayers:Iplayer[];
    setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayerCard = ({player , coin, setCoin , selectedPlayers , setSelectedPlayers}:ISelectedPlayerCardProps) => {  
  const handleRemovePlayer = (player:Iplayer) => { 
    const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName) 
    // console.log(restPlayers);
    setSelectedPlayers(restPlayers);

    const newCoinPrise = coin + player.price;
    setCoin(newCoinPrise)
  }
  return (
    <div className='flex gap-3 px-2 items-center my-2 justify-between  border-2 border-gray-200 rounded-3xl'> 
            <div className='flex gap-3'> 
              <img src={player.playerImg} className="w-[50px] h-[50px] p-1  rounded-1xl" alt="" />
             
            <div>  
              <h3 className='font-bold text-2xl'>{player.playerName}</h3>
              <p className='font-semibold'>{player.playerType}</p>
            </div> 
            </div>
            <span className='text-red-500 font-bold cursor-pointer text-2xl' 
            onClick={()=>handleRemovePlayer(player)}> 
               <MdDelete/>
            </span>
          </div> 
  );
};

export default SelectedPlayerCard;