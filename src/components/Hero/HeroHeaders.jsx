import React from "react";

export default function HeroHeaders({ friendsData = [] }) {
  // Normalize statuses and compute counts (case-insensitive + tolerant)
  const friendsCount = friendsData.length;

  const stats = friendsData.reduce(
    (acc, friend) => {
      const s = String(friend.status || "")
        .toLowerCase()
        .replace(/[-_]/g, " ")
        .trim();
      if (s === "on track" || s === "on-track" || s === "ontrack")
        acc.onTrack++;
      else if (s === "almost due" || s === "almost-due" || s === "almostdue")
        acc.almostDue++;
      else if (s === "overdue") acc.overdue++;
      else acc.unknown++;
      return acc;
    },
    { onTrack: 0, almostDue: 0, overdue: 0, unknown: 0 },
  );
  return (
    <header className="py-12 text-center px-4 bg-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="max-w-xl mx-auto text-slate-500 mb-8 text-sm md:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#1e3a34] hover:bg-[#2a5047] text-white border-none px-8 mb-16">
        + Add a Friend
      </button>

      <div className="flex justify-center items-center mt-6 px-2 sm:px-4">
        {/*
          Mobile: stacked full-width cards (flex-col)
          md+: grid with 4 columns
        */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-3 md:hidden">
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="stat-value text-slate-700 text-xl">
                {friendsCount}
              </div>
              <div className="stat-title text-[10px] uppercase font-bold tracking-wider">
                Total Friends
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="stat-value text-slate-700 text-xl">
                {stats.onTrack}
              </div>
              <div className="stat-title text-[10px] uppercase font-bold tracking-wider">
                On Track
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="stat-value text-amber-500 text-xl">
                {stats.almostDue}
              </div>
              <div className="stat-title text-[10px] uppercase font-bold tracking-wider">
                Almost Due
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="stat-value text-red-500 text-xl">
                {stats.overdue}
              </div>
              <div className="stat-title text-[10px] uppercase font-bold tracking-wider">
                Overdue
              </div>
            </div>
          </div>

          {/* Desktop / Tablet: grid layout */}
          <div className="hidden md:grid grid-cols-4 gap-6 p-6 bg-transparent border border-slate-100 shadow-sm rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <div className="stat-value text-slate-700 text-3xl">
                {friendsCount}
              </div>
              <div className="stat-title text-[11px] uppercase font-bold tracking-wider">
                Total Friends
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="stat-value text-slate-700 text-3xl">
                {stats.onTrack}
              </div>
              <div className="stat-title text-[11px] uppercase font-bold tracking-wider">
                On Track
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="stat-value text-amber-500 text-3xl">
                {stats.almostDue}
              </div>
              <div className="stat-title text-[11px] uppercase font-bold tracking-wider">
                Almost Due
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="stat-value text-red-500 text-3xl">
                {stats.overdue}
              </div>
              <div className="stat-title text-[11px] uppercase font-bold tracking-wider">
                Overdue
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
