"use client";

import Image from "next/image";
import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiClock,
  FiArchive,
  FiTrash2,
} from "react-icons/fi";

export default function FriendProfileCard() {
  return (
    <div className="bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-5xl grid grid-cols-[260px_1fr]">
        {/* LEFT PANEL */}
        <div className="p-6 border-r border-gray-200 flex flex-col items-center text-center">
          <Image
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Emma Wilson"
            width={64}
            height={64}
            className="rounded-full"
          />

          <h3 className="font-semibold text-gray-800 mt-3">Emma Wilson</h3>

          <span className="mt-1 text-xs px-2 py-[2px] rounded-full bg-red-100 text-red-600 font-medium">
            Overdue
          </span>

          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            "Former colleague, great mentor"
            <br />
            Preferred email
          </p>

          <div className="mt-6 w-full space-y-2">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-md flex items-center justify-center gap-2 text-gray-700">
              <FiClock size={14} />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-md flex items-center justify-center gap-2 text-gray-700">
              <FiArchive size={14} />
              Archive
            </button>

            <button className="w-full text-sm py-2 rounded-md flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">
              <FiTrash2 size={14} />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-6 space-y-4">
          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <Stat title="Days Since Contact" value="62" />
            <Stat title="Goal (Days)" value="30" />
            <Stat title="Next Due" value="Feb 27, 2026" />
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Relationship Goal
              </p>
              <p className="text-xs text-gray-500">
                Connect every <span className="font-medium">30 days</span>
              </p>
            </div>

            <button className="text-xs text-gray-500 hover:text-gray-700">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Quick Check-in
            </p>

            <div className="grid grid-cols-3 gap-3">
              <Action icon={<FiPhone size={16} />} label="Call" />
              <Action icon={<FiMessageSquare size={16} />} label="Text" />
              <Action icon={<FiVideo size={16} />} label="Video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* STAT CARD */
function Stat({ title, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl py-4 text-center">
      <p className="text-lg font-semibold text-gray-800">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{title}</p>
    </div>
  );
}

/* ACTION BUTTON */
function Action({ icon, label }) {
  return (
    <button className="flex flex-col items-center justify-center gap-1 bg-white border border-gray-300 rounded-lg py-3 hover:bg-gray-100">
      <div className="text-gray-700">{icon}</div>
      <span className="text-xs text-gray-600">{label}</span>
    </button>
  );
}
