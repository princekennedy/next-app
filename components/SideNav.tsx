"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { User } from "@/app/models/interfaces";


export default function SideNav() {

  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [user,setUser]= useState<User| null>(null)
  const getUserByID = async(id: string)=> {
      const {data} = await supabase.from("users1").select("*").eq('user_id',id);
      console.log(id)
      if(data){
          setUser(data[0]);
      }else{
          console.log("failed to get user")
      }
  }
  
  const getUser = async()=> {
      const {data: {user}} = await supabase.auth.getUser();
      if(user){
      getUserByID(user.id);
      }else{
      console.log("failed to get user")
      }
  }



  const logout=async () => {
       const { error}: any = await supabase.auth.signOut();
       if(!error){
        router.push('/login');
       }

  }

  useEffect(() => {
      getUser();
    setActiveLink(window.location.pathname);
  }, [window.location.pathname]);

  const activeRoute = (path: string) => (activeLink === path ? ' text-blue-700 ' : ' text-gray-200 ');

  return (
    <div className="w-64 bg-gray-700 text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        My Account
      </div>
      <nav className="flex-1">
        <ul>
          <li>
            <Link href="/admin" className={ activeRoute('/admin') + " block py-3 px-4 hover:bg-gray-700 transition" }>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/admin/get-started"
              className={ activeRoute('/admin/get-started') +"block py-3 px-4 hover:bg-gray-700 transition"}
            >
              Get Started Message
            </Link>
          </li>
          <li>
            <Link
              href="/admin/fitting-requests"
              className={ activeRoute('/admin/fitting-requests') +"block py-3 px-4 hover:bg-gray-700 transition"}
            >
              Fitting Requests
            </Link>
          </li>
          <li>
            <Link
              href="/admin/fitting-tasks"
              className={ activeRoute('/admin/fitting-tasks') +"block py-3 px-4 hover:bg-gray-700 transition"}
            >
              Fitting Tasks
            </Link>
          </li>
          <li>
            <Link
              href="/admin/fitting-schedule"
              className={ activeRoute('/admin/fitting-schedule') + "block py-3 px-4 hover:bg-gray-700 transition"}
            >
              Fitting Schedule
            </Link>
          </li>
          <li>
            <Link
              href="/admin/fitting-history"
              className={ activeRoute('/admin/fitting-history') +"block py-3 px-4 hover:bg-gray-700 transition"}
            >
              Fitting History
            </Link>
          </li>
          <li>
            <Link
              href="/admin/customer-profiles"
              className={ activeRoute('/admin/customer-profiles') +"block py-3 px-4 hover:bg-gray-700 transition"}
            >
              Customer Profiles
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        Welcome: { user?.name}
        <button
          onClick={() => { logout()}}
          className="block py-3 px-4 hover:bg-gray-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
