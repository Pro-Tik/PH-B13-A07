"use client";

import React, { createContext, useContext, useCallback, useState } from "react";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const [events, setEvents] = useState([]); // in-memory only

  const addEvent = useCallback((event) => {
    const e = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      timestamp: Date.now(),
      ...event,
    };
    setEvents((prev) => [e, ...prev]);
  }, []);

  const clearEvents = useCallback(() => setEvents([]), []);

  return (
    <TimelineContext.Provider value={{ events, addEvent, clearEvents }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimeline must be used within TimelineProvider");
  return ctx;
}
