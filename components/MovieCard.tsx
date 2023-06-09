import React from "react";
import { useRouter } from "next/router";

import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";

interface MovieCardProps {
   data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
   const router = useRouter();
   const { openModal } = useInfoModal();

   return (
      <div className="group bg-zinc-900 col-span relative h-[12vw]">
         <img src={data.thumbnailUrl} alt="Thumbnail Movie"
              className="cursor-pointer object-cover 
                         transition duration delay-300
                         shadow-xl rounded-md
                         group-hover:opacity-90
                         sm:group-hover:opacity-0
                         w-full h-[12vw]" />
         <div className="opacity-0 w-full scale-0
                         absolute top-0 z-10
                         transition duration-200 delay-300
                         invisible sm:visible
                         group-hover:scale-110
                         group-hover:-translate-y-[6vw]
                         group-hover:translate-x-[2vw]
                         group-hover:opacity-100">
            <img src={data.thumbnailUrl} alt="Thumbnail Movie"
                 className="cursor-pointer object-cover
                            transition duration
                            shadow-xl rounded-t-md
                            w-full h-[12vw]" />
            <div className="bg-zinc-800 w-full
                            absolute z-10 p-2 lg:p-4
                            transition shadow-md rounded-b-md">
               
               <div className="flex flex-row itmes-center gap-3">
                  <div className="cursor-pointer rounded-full
                                  w-6 h-6 lg:w-10 lg:h-10 transition
                                  flex justify-center items-center 
                                  bg-white hover:bg-neutral-300"
                       onClick={() => router.push(`/watch/${data?.id}`)}>
                        <BsFillPlayFill size={30} />
                  </div>
                  <FavoriteButton movieId={data?.id} />
                  <div className="cursor-pointer ml-auto group/item 
                                  w-6 h-6 lg:w-10 lg:h-10 rounded-full 
                                  border-white border-2 hover:border-neutral-300
                                  flex justify-center items-center transition"
                        onClick={() => openModal(data?.id)}>
                        <BiChevronDown size={30} className="text-white group-hover/item:text-neutral-300"/>
                  </div>
               </div>

               <p className="text-green-400 font-semibold mt-4 text-sm">
                  New <span className="text-white">2023</span>
               </p>

               <div className="flex flex-row mt-4 gap-2 items-center">
                  <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
               </div>

               <div className="flex flex-row mt-4 gap-2 items-center">
                  <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default MovieCard;