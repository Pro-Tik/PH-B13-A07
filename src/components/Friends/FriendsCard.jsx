"use client";

import Image from "next/image";
import Link from "next/link";

export const FriendCard = ({
  picture,
  name,
  days_since_contact,
  tags,
  status,
  id,
}) => {
  // Mapping the status to the exact colors in your screenshot
  const statusColors = {
    "Almost Due": "bg-[#f1b45c] text-white", // The mustard yellow
    Overdue: "bg-[#ef4444] text-white", // Red
    "On Track": "bg-[#22c55e] text-white", // Green
  };
  // Make the lookup case-insensitive and ensure a sensible fallback
  const normalizedStatusColors = Object.fromEntries(
    Object.entries(statusColors).map(([k, v]) => [k.toLowerCase(), v]),
  );
  const statusClass =
    normalizedStatusColors[String(status || "").toLowerCase()] ||
    "bg-slate-200 text-slate-700";
  // console.log({ image, name }, "friend props");

  const handleClick = (e) => {
    // allow Link navigation; log for debug
    const friend = { id, name, status, days_since_contact, tags, picture };
    console.log("card clicked:", friend);
  };

  return (
    <Link
      href={`/friendsinfo/${id}`}
      onClick={handleClick}
      className="card bg-white shadow-2xl shadow-slate-200/60 rounded-[2.5rem] p-10 flex flex-col items-center text-center border-none cursor-pointer"
    >
      {/* Profile Avatar */}
      <div className="avatar mb-6">
        <div className="w-32 h-32 rounded-full relative overflow-hidden">
          <Image src={picture} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Name and Relative Time */}
      <h3 className="font-bold text-xl text-[#1e293b] mb-1 tracking-tight">
        {name}
      </h3>
      <p className="text-sm font-medium text-slate-400 mb-6">
        {days_since_contact}d ago
      </p>

      {/* Category Tag (Work/Family/etc) */}
      <div className="mb-8 flex flex-col ">
        {(tags || []).map((tag, i) => (
          <div key={i} className="mb-4">
            <span className="bg-[#dcfce7] text-[#15803d] font-bold py-2 px-6  rounded-full text-xs tracking-widest uppercase">
              {tag}
            </span>
          </div>
        ))}
      </div>

      {/* Status Action Button */}
      <button
        className={`btn btn-md no-animation border-none rounded-full px-10 font-bold text-sm h-14 shadow-lg shadow-orange-200/40 ${statusClass}`}
      >
        {status || "Unknown"}
      </button>
    </Link>
  );
};

export default FriendCard;
