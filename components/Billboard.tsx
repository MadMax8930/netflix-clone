import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import useBillboard from "@/hooks/useBillboard";
import PlayButton from "./PlayButton";

const Billboard = () => {
   const { data: vid } = useBillboard();
   return (                    
      <div className="relative h-[56.25vw]"> {/* 16:9 aspect ratio */}
         <video 
            className="w-full h-[56.25vw] object-cover brightness-[60%]"
            autoPlay muted loop
            poster={vid?.thumbnailUrl} 
            src={vid?.videoUrl}>
         </video>
         <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
            <p className="text-white text-1xl md:text-5xl lg:text-6xl 
               h-full w-[50%] font-bold drop-shadow-xl">
               {vid?.title}
            </p>
            <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8
               w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
               {vid?.description}
            </p>
            <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
               <PlayButton movieId={vid?.id} />
               <button className="text-white bg-white bg-opacity-30 rounded-md 
                  py-2 md:py-3 lg:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold 
                  flex flex-row items-center hover:bg-opacity-20 transition">
                  <AiOutlineInfoCircle className="mr-1" /> More Info
               </button>
            </div>
         </div>
      </div>
   )
}

export default Billboard;