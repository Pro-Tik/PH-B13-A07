import React from "react";
import FriendsCard, { FriendCard } from "./FriendsCard";

export default function FriendsBody({ friendsData }) {
  console.log(friendsData);
  return (
    <main className=" mx-auto px-6 py-10 bg-[#f8fafc]">
      <h2 className="text-xl font-bold text-slate-800 mb-8 ml-2">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {friendsData.map((friend, index) => (
          <FriendsCard key={friend.id || index} {...friend}></FriendsCard>
        ))}
      </div>
    </main>
  );
}
