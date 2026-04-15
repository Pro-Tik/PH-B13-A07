import React from "react";

export default function HeroHeaders() {
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

      <div className="flex justify-center">
        <div className="stats shadow-sm border border-slate-100 w-full max-w-5xl">
          {[
            { label: "Total Friends", value: "10" },
            { label: "On Track", value: "3" },
            { label: "Need Attention", value: "6" },
            { label: "Interactions This Month", value: "12" },
          ].map((stat, i) => (
            <div key={i} className="stat place-items-center">
              <div className="stat-value text-slate-700 text-2xl md:text-3xl">
                {stat.value}
              </div>
              <div className="stat-title text-[10px] uppercase font-bold tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
