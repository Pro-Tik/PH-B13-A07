"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import friendsData from "@/../public/friends.json";
import { useEffect } from "react";
import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiClock,
  FiArchive,
  FiTrash2,
} from "react-icons/fi";
import ActionButton from "@/components/ActionButton";

// Removed unused 'params' prop
export default function Friendinfoshow() {
  const { id } = useParams();

  const friend = friendsData.find((friend) => friend.id === Number(id));

  if (!friend) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <p className="text-gray-600">Friend not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-start sm:items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-5xl flex flex-col md:flex-row">
        {/* LEFT PANEL */}
        <div className="p-6 md:w-[280px] lg:w-[320px] md:border-r border-b md:border-b-0 border-gray-200 flex flex-col items-center text-center shrink-0">
          <Image
            src={
              friend.picture || "https://randomuser.me/api/portraits/men/3.jpg"
            }
            alt={friend.name || "Friend profile picture"}
            width={80}
            height={80}
            className="rounded-full shadow-sm"
          />

          <h3 className="font-semibold text-lg text-gray-800 mt-4">{friend.name}</h3>

          <span className="mt-2 text-xs px-2.5 py-1 rounded-full bg-red-100 text-red-600 font-semibold">
            {friend.status}
          </span>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-[250px]">
            {friend.bio}
          </p>

          <div className="mt-8 w-full flex flex-col gap-3">
            <ActionButton
              friendId={friend.id}
              type="snooze"
              label="Snooze 2 Weeks"
              icon={<FiClock size={16} />}
            />
            <ActionButton
              friendId={friend.id}
              type="archive"
              label="Archive"
              icon={<FiArchive size={16} />}
            />
            <ActionButton
              friendId={friend.id}
              type="delete"
              label="Delete"
              icon={<FiTrash2 size={16} />}
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-6 md:p-8 flex-1 space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat
              title="Days Since Contact"
              value={friend.days_since_contact}
            />
            <Stat title="Goal (Days)" value={friend.goal} />
            <Stat title="Next Due" value={friend.next_due_date} />
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Relationship Goal
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                Connect every{" "}
                <span className="font-semibold text-blue-600">{friend.goal} days</span>
              </p>
            </div>

            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
              Edit Goal
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-gray-800 mb-4">
              Quick Check-in
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ActionButton
                friendId={friend.id}
                type="call"
                label="Call"
                icon={<FiPhone size={18} />}
              />
              <ActionButton
                friendId={friend.id}
                type="text"
                label="Text"
                icon={<FiMessageSquare size={18} />}
              />
              <ActionButton
                friendId={friend.id}
                type="video"
                label="Video"
                icon={<FiVideo size={18} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl py-4 text-center">
      <p className="text-lg font-semibold text-gray-800">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{title}</p>
    </div>
  );
}
