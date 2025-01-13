"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { User } from "@/app/models/interfaces";
import { getUser } from "@/app/api/users/route";


export default function CustomerSideNav() {

    const router = useRouter();
    const [activeLink, setActiveLink] = useState('');
    const [user,setUser]= useState<User| null>(null)

    const logout=async () => {
        const { error}: any = await supabase.auth.signOut();
        if(!error){
          router.push('/login');
        }
    }
    
    const initaliseDataPull = () => {
      setActiveLink(window.location.pathname);
      getUser().then( user =>{
        if(user) {
          setUser(user);
        }
      });
    }
    
    useEffect(() => {
      initaliseDataPull();
    }, []);

    const activeRoute = (path: string) => (activeLink === path ? ' text-blue-700 ' : ' text-gray-200 ');

    return (
      <div className="w-64 bg-gray-700 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          My Account
        </div>
        <nav className="flex-1">
          <ul>
            <li>
              <Link href="/admin" className={ activeRoute('/customer') + " block py-3 px-4 hover:bg-gray-700 transition" }>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/customer/get-started"
                className={ activeRoute('/customer/get-started') +"block py-3 px-4 hover:bg-gray-700 transition"}
              >
                Get Started Message
              </Link>
            </li>
            <li>
              <Link
                href="/customer/schedule-swing-analysis"
                className={ activeRoute('/customer/schedule-swing-analysis') +"block py-3 px-4 hover:bg-gray-700 transition"}
              >
                Schedule a Swing Analysis
              </Link>
            </li>
            <li>
              <Link
                href="/customer/schedule-fitting"
                className={ activeRoute('/customer/schedule-fitting') + "block py-3 px-4 hover:bg-gray-700 transition"}
              >
                Schedule a Fitting
              </Link>
            </li>
            <li>
              <Link
                href="/customer/fitting-progress"
                className={ activeRoute('/customer/fitting-progress') + "block py-3 px-4 hover:bg-gray-700 transition"}
              >
                Fitting Progress
              </Link>
            </li>
            <li>
              <Link
                href="/customer/account-history"
                className={ activeRoute('/customer/account-history') +"block py-3 px-4 hover:bg-gray-700 transition"}
              >
                Account History
              </Link>
            </li>
            <li>
              <Link href="/customer/my-account"
                className={ activeRoute('/customer/my-account') +"block py-3 px-4 hover:bg-gray-700 transition"}>
                My Account
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
  