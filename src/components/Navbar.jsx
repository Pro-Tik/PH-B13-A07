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

  const navItems = [
    { name: "Home", href: "/", icon: <HiHome className="text-lg" /> },
    { name: "Timeline", href: "/timeline", icon: <HiOutlineClock className="text-lg" /> },
    { name: "Analytics", href: "/analytics", icon: <IoStatsChartSharp className="text-lg" /> },
  ];

  const renderLinks = () =>
    navItems.map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className={`${linkStyles} ${isActive(item.href) ? activeStyles : inactiveStyles}`}
        >
          {item.icon} {item.name}
        </Link>
      </li>
    ));

  return (
    <nav className="navbar bg-white shadow-sm px-4 md:px-12 py-4 z-50 relative justify-between">
      <div className="navbar-start w-auto flex items-center">
        {/* Mobile Hamburger Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden mr-1 pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#1e3a34]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-lg bg-white rounded-xl w-56 gap-2 border border-gray-100"
          >
            {renderLinks()}
          </ul>
        </div>
        <Link
          href="/"
          className="text-2xl font-bold text-[#1e3a34] cursor-pointer"
        >
          KeenKeeper
        </Link>
      </div>

      <div className="navbar-end hidden md:flex w-auto">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
}
