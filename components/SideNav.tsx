"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideNav() {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
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
          Welcome: Prince Kennedy
          <Link
            href="/login"
            className="block py-3 px-4 hover:bg-gray-700 transition"
          >
            Logout
          </Link>
        </div>
      </div>
    );
  }
  