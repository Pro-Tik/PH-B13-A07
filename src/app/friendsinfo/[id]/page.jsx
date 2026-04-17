import Image from "next/image";
import friendsData from "@/../public/friends.json";

import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiClock,
  FiArchive,
  FiTrash2,
} from "react-icons/fi";

export default async function Friendinfoshow({ params }) {
  const { id } = await params;
  console.log(friendsData, "From id page and id is ", id);
  const friend = friendsData.find((friend) => friend.id === Number(id));
  console.log(friend);
  //    {
  //     "id": 1,
  //     "name": "Arif Hasan",
  //     "picture": "https://randomuser.me/api/portraits/men/1.jpg",
  //     "email": "[arif.hasan@gmail.com](mailto:arif.hasan@gmail.com)",
  //     "days_since_contact": 18,
  //     "status": "overdue",
  //     "tags": ["college", "close friend"],
  //     "bio": "We studied computer science together and still share coding ideas occasionally.",
  //     "goal": 14,
  //     "next_due_date": "2026-04-10"
  //   }
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

          <h3 className="font-semibold text-gray-800 mt-3">{friend.name}</h3>

          <span className="mt-1 text-xs px-2 py-[2px] rounded-full bg-red-100 text-red-600 font-medium">
            {friend.status}
          </span>

          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            {friend.bio}
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
            <Stat
              title="Days Since Contact"
              value={friend.days_since_contact}
            />
            <Stat title="Goal (Days)" value={friend.goal} />
            <Stat title="Next Due" value={friend.next_due_date} />
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Relationship Goal
              </p>
              <p className="text-xs text-gray-500">
                Connect every{" "}
                <span className="font-medium">{friend.goal} days</span>
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
