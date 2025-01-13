"use client"
import SideNav from "@/components/SideNav";
import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  useEffect(() => {
    getUser();
  },[]);

  const getUser = async()=> {
      const {data: {user}} = await supabase.auth.getUser();
      if(user){
        return;
      }else{
        router.push("/login");
      }
  }

  return (
    <div className="flex h-screen">
      <SideNav/>
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
