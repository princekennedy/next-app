"use client"

import Link from "next/link";

export default function SideNav() {
    return (
      <div className="w-64 bg-gray-700 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          My Account
        </div>
        <nav className="flex-1">
          <ul>
            <li>
              <Link href="/admin"
                className="block py-3 px-4 hover:bg-gray-700 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/admin/get-started"
                className="block py-3 px-4 hover:bg-gray-700 transition"
              >
                Get Started Message
              </Link>
            </li>
            <li>
              <Link
                href="/admin/fitting-requests"
                className="block py-3 px-4 hover:bg-gray-700 transition"
              >
                Fitting Requests
              </Link>
            </li>
            <li>
              <Link
                href="/admin/fitting-tasks"
                className="block py-3 px-4 hover:bg-gray-700 transition"
              >
                Fitting Tasks
              </Link>
            </li>
            <li>
              <Link
                href="/admin/fitting-schedule"
                className="block py-3 px-4 hover:bg-gray-700 transition"
              >
                Fitting Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/admin/fitting-history"
                className="block py-3 px-4 hover:bg-gray-700 transition"
              >
                Fitting History
              </Link>
            </li>
            <li>
              <Link
                href="/admin/customer-profiles"
                className="block py-3 px-4 hover:bg-gray-700 transition"
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
  