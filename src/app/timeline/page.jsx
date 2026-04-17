"use client";
import React, { useState, useEffect } from "react";
import { FaHandshake, FaVideo, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { FiClock, FiArchive, FiTrash2 } from "react-icons/fi";
import { useTimeline } from "@/context/TimelineContext";

// 1. Icon Mapper Function
const getIcon = (type) => {
  switch (type) {
    case "Meetup":
      return <FaHandshake className="text-orange-400 text-xl" />;
    case "Text":
      return <HiOutlineChatBubbleLeft className="text-gray-400 text-xl" />;
    case "Video":
      return <FaVideo className="text-slate-500 text-lg" />;
    case "Call":
      return <FaPhoneAlt className="text-slate-600 text-base" />;
    case "Snooze":
      return <FiClock className="text-blue-400 text-xl" />;
    case "Archive":
      return <FiArchive className="text-purple-400 text-xl" />;
    case "Delete":
      return <FiTrash2 className="text-red-400 text-xl" />;
    default:
      return null;
  }
};

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const { events } = useTimeline();
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriendsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch friends:", err);
        setLoading(false);
      });
  }, []);

  // Map over context events to format them
  const contextData = events.map((e) => {
    const friend = friendsData.find((f) => f.id === e.friendId) || {};
    const formattedType = e.type ? e.type.charAt(0).toUpperCase() + e.type.slice(1) : "Unknown";
    const dateObj = new Date(e.timestamp);
    const dateStr = dateObj
      .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      .toUpperCase();

    return {
      id: e.id,
      type: formattedType,
      person: friend.name || "Unknown Friend",
      date: dateStr,
    };
  });

  // 2. Filter Logic
  const filteredData =
    filter === "All" ? contextData : contextData.filter((item) => item.type === filter);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <span className="loading loading-spinner text-error loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8fafc] flex justify-center min-h-[calc(100vh-250px)]">
      <div className="w-full max-w-4xl p-8 font-sans border-x border-gray-100/50 bg-[#f8fafc]">
        <h1 className="text-3xl font-bold text-[#0f172a] mb-8">Timeline</h1>

        {/* Filter Dropdown */}
        <div className="relative mb-6">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-gray-200 text-slate-500 py-2 px-4 pr-10 rounded-md text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <option value="All">Filter timeline</option>
            <option value="Meetup">Meetup</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            <option value="Call">Call</option>
            <option value="Snooze">Snooze</option>
            <option value="Archive">Archive</option>
            <option value="Delete">Delete</option>
          </select>
        </div>

        {/* Dynamic List */}
        <div className="space-y-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Dynamic Icon */}
              <div className="w-12 flex-shrink-0">{getIcon(item.type)}</div>

              {/* Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-bold text-slate-800 text-lg">
                    {item.type}
                  </span>
                  <span className="text-slate-400 font-normal">with</span>
                  <span className="font-semibold text-slate-600 text-lg">
                    {item.person}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-400 mt-2 tracking-widest uppercase">
                  {item.date}
                </span>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredData.length === 0 && (
            <p className="text-slate-400 text-center py-10 italic">
              No items found for this filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
