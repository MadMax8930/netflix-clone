import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";

// Protecting routes by fetching session on client side
export async function getServerSideProps(context: NextPageContext) {
   const session = await getSession(context);

   if (!session) {
      return {
         redirect: {
            destination: '/auth',
            permanent: false,
         }
      }
   }

   return {
      props: {}
   }
}


export default function Home() {
   const { data: user } = useCurrentUser();

  return (
    <>
       <h1 className="text-2xl text-green-500">Netflix Clone</h1>
       <p className="text-white">Logged in: {user?.name}</p>
       <p className="text-white">Logged in: {user?.email}</p>
       <button className="h-10 w-20 text-white p-2 bg-red-600 rounded-md" onClick={() => signOut()}>Logout!</button>
    </>
  )
}
