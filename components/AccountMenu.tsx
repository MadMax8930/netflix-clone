import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
   visible?: boolean;
}

const AccountMenu:React.FC<AccountMenuProps> = ({ visible }) => {
   const { data: connected } = useCurrentUser();

   if (!visible) {
      return null;
   }

   return (
      <div className="flex flex-col border-2 border-gray-800 bg-black w-56 absolute top-14 right-0 py-5">
         <div className="flex flex-col gap-3">
            <div className="group/item flex flex-row gap-3 px-3 items-center w-full">
               <img className="w-8 rounded-md" src="/images/default-blue.png" alt="Account Logo" />
               <p className="text-white text-sm group-hover/item:underline">
                  {connected?.name}
               </p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div onClick={() => signOut()} className="text-white text-center text-sm px-3 hover:underline">
               Sign out of Netflix
            </div>       
         </div>
      </div>
   )
}

export default AccountMenu;