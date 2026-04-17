"use client";
import React from "react";
import { HiHome, HiOutlineClock } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoStatsChartSharp } from "react-icons/io5";
export default function Navbar() {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path) => pathname === path;

  // Shared styles for nav items
  const linkStyles =
    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors";
  const activeStyles = "bg-[#1e3a34] text-white hover:bg-[#2a5047]";
  const inactiveStyles = "text-gray-600 hover:bg-gray-100";

  return (
    <nav className="navbar bg-white shadow-sm px-4 md:px-12 py-4 z-50 relative">
      <div className="flex-1">
        <Link
          href="/"
          className="text-2xl font-bold text-[#1e3a34] cursor-pointer"
        >
          KeenKeeper
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li>
            <Link
              href="/"
              className={`${linkStyles} ${isActive("/") ? activeStyles : inactiveStyles}`}
            >
              <HiHome className="text-lg" /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={`${linkStyles} ${isActive("/timeline") ? activeStyles : inactiveStyles}`}
            >
              <HiOutlineClock className="text-lg" /> Timeline
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="/analytics"
              className={`${linkStyles} ${isActive("/analytics") ? activeStyles : inactiveStyles}`}
            >
              <IoStatsChartSharp /> Analytics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
