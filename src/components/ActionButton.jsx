"use client";

import React from "react";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-toastify";

export default function ActionButton({ friendId, type, label, icon, onClick, className }) {
  const { addEvent } = useTimeline();

  const handle = (e) => {
    e?.preventDefault?.();
    if (typeof onClick === "function") return onClick(e);
    
    // Log to Timeline Context
    addEvent({ friendId, type, label });
    
    // Show a success toast notification
    toast.success(`${label} action recorded!`);
  };

  return (
    <button
      onClick={handle}
      className={`flex flex-col items-center justify-center gap-1 bg-white border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition-colors w-full h-full ${className || ""}`}
    >
      <div className="text-gray-700">{icon}</div>
      <span className="text-xs text-gray-600 px-2 text-center">{label}</span>
    </button>
  );
}
