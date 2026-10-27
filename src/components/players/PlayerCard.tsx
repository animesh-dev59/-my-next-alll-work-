// import React from 'react';
// import { FaFlag, FaUser } from 'react-icons/fa';
// import type { Iplayer } from './playerType';

// const PlayerCard = ({player}:{player:Iplayer}) => {
//   return (
//              <div className="card bg-base-100  shadow-sm">
//   <figure>
//     <img
//       src={player.playerImg}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body space-y-3">
//     <h2 className="card-title"><FaUser /> {player.playerName}</h2>    

//      <div className='flex justify-between gap-8 items-center'> 
//       <div className='flex gap-2 items-center'> 
//         <span><FaFlag /> </span>
//         <p className='font-semibold'>{player.origin}</p>
//       </div>
//       < p className='btn'>{player.playerType}</p>
//      </div> 
//        <div className="divider"></div> 
//        <h3 className='font-bold text-sm'>Rating</h3>
//        {/* <hr className='text-shadow-gray-600' /> */}
//        <div className='flex justify-between gap-4 items-center' > 
//         <p className='font-semibold'>{player.battingStyle}</p>
//         <p className='btn'>{player.bowlingStyle}</p>
//        </div>
//        <div className='flex justify-between gap-4 items-center'> 
//         <p className='font-semibold'>{player.price}</p>
//         <p className='btn'>chose Player</p>
//        </div>
//   </div>
// </div>
//   );
// };

// export default PlayerCard;  
import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { FaFlag, FaUser, FaStar, FaArrowRight } from 'react-icons/fa';
import type { Iplayer } from './playerType';
import { Bounce, toast } from 'react-toastify';
import Playaers from './Playaers';

interface PlayerCardProps {
  player: Iplayer;
    coin:number;
     setCoin:Dispatch<SetStateAction<number>>;
     selectedPlayers:Iplayer[];
   setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ player , coin , setCoin , selectedPlayers , setSelectedPlayers}: 
   PlayerCardProps) => {     
    // console.log(selectedPlayers,setSelectedPlayers);
  const [isSelected , setIsSelected ] = useState(false);  
   const handleSelectetPlayer = () => { 
    setIsSelected(true);
    const newCoinPrise = coin - player.price;
    if(newCoinPrise >= 0){ 
      setCoin(newCoinPrise); 
      // toast.success(` ${player.playerName} is purchase successfully.`)
      toast.success(` ${player.playerName} is purchase successfully.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
    } 
    else{ 
      toast.error('Coin is not enought to purchase');
    }  
    setSelectedPlayers([...selectedPlayers,player]);
    // console.log(setSelectedPlayers);
   }
  
  // console.log(isSelected,setIsSelected,'isSelected' , 'setSelected');
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

      {/* Player Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={player.playerImg}
          alt={`${player.playerName} profile`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
            {player.playerType}
          </span>
        </div>

        {/* Player Icon */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/90 text-slate-700 shadow-sm backdrop-blur">
          <FaUser />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Name and Origin */}
        <div className="border-b border-slate-100 pb-4">
          <h2 className="truncate text-xl font-extrabold tracking-tight text-slate-900">
            {player.playerName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <FaFlag className="shrink-0 text-blue-500" />
            <span className="font-medium">{player.origin}</span>
          </div>
        </div>

        {/* Player Skills */}
        <div className="py-4">
          <div className="mb-3 flex items-center gap-2">
            <FaStar className="text-amber-500" />
            <h3 className="text-sm font-bold text-slate-800">
              Player Overview
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="min-w-0 rounded-xl bg-slate-50 p-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Batting
              </p>
              <p className="truncate text-sm font-bold text-slate-700">
                {player.battingStyle}
              </p>
            </div>

            <div className="min-w-0 rounded-xl bg-slate-50 p-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Bowling
              </p>
              <p className="truncate text-sm font-bold text-slate-700">
                {player.bowlingStyle}
              </p>
            </div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-400">
              Player Price
            </p>
            <p className="mt-1 truncate text-xl font-extrabold text-slate-900">
              {player.price}
            </p>
          </div>

          {/* <button
            // type="button" 
            onClick={()=>setIsSelected(true)}
            
            className={`inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 active:scale-95`}
            disabled={isSelected ? true : false}
          >
            {isSelected === true ? 'Selected' : 'Choose Player'}
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </button> */}

          <button
  type="button" 
  onClick={() => handleSelectetPlayer()}
  className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold shadow-sm transition-all duration-200 
    ${isSelected 
      ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
      : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'}`}
  disabled={isSelected}
>
  {isSelected ? 'Selected' : 'Choose Player'}
  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
</button>
        </div>

      </div>
    </article>
  );
};

export default PlayerCard;