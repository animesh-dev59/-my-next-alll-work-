// import React from 'react';
// import Banners from '../assets/banner-main.png'
// const Banner = () => {
//   return (
//     <div className='bg-amber-300 container mx-auto flex justify-center items-center '> 
//       <div className='h-417 w-970   justify-center '> 
//         <img src={Banners} alt="" />
//         <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
//          <h5>Beyond Boundaries Beyond Limits</h5>
//          <button className='btn btn-warning'>Claim Free Credit</button>
//       </div>
      
//     </div>
//   );
// };

// export default Banner;


import React from 'react';
import Banners from '../assets/banner-main.png';

const Banner = () => {
  return (
    <div className="container mx-auto mt-4  ">
      {/* Vitorio div styled with exact dimensions, dark gradient, and border */}
      <div className="  relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#181c2b] via-[#0b0c10] to-[#251822] px-32 py-16 md:p-12 flex flex-col justify-center items-center text-center shadow-2xl border border-white/10">
        
        {/* Background glowing effects for corners (Blue & Pink lighting) */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 w-full">
          
          {/* Banner Image */}
          <div className="w-36 md:w-44 mb-2">
            <img src={Banners} alt="Cricket Banner" className="w-full h-auto object-contain drop-shadow-md" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>

          {/* Subtitle */}
          <h5 className="text-gray-300 text-base md:text-lg font-medium pt-1 pb-2">
            Beyond Boundaries Beyond Limits
          </h5>

          {/* Claim Free Credit Button */}
          <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-[#ccff00] cursor-pointer">
            Claim Free Credit
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;