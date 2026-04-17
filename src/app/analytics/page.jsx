"use client";

import React, { useMemo } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip
} from 'recharts';
import { useTimeline } from "@/context/TimelineContext";

// Custom Tooltip for the hover effect
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg border-none text-sm">
                <p className="font-semibold">{`${payload[0].name}: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const FriendshipAnalytics = () => {
    const { events } = useTimeline();

    // Dynamically calculate interaction data from context events
    const interactionData = useMemo(() => {
        const counts = events.reduce((acc, event) => {
            const typeStr = event.type ? event.type.charAt(0).toUpperCase() + event.type.slice(1) : "Unknown";
            acc[typeStr] = (acc[typeStr] || 0) + 1;
            return acc;
        }, {});

        // Define a color palette for the different event types
        const colors = {
            Text: '#a855f7',
            Call: '#14532d',
            Video: '#22c55e',
            Snooze: '#3b82f6',
            Archive: '#8b5cf6',
            Delete: '#ef4444',
            Meetup: '#f97316'
        };

        return Object.keys(counts).map(key => ({
            name: key,
            value: counts[key],
            color: colors[key] || '#94a3b8' // Fallback slate color
        }));
    }, [events]);

    return (
        <div className="flex flex-col items-center justify-center w-full p-6 bg-gray-50 min-h-[400px] font-sans">
            <div className="w-full max-w-2xl bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">

                <div className="mb-2">
                    <h1 className="text-2xl font-bold text-slate-900">Friendship Analytics</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                        By Interaction Type
                    </p>
                </div>

                <div className="w-full h-[350px] flex items-center justify-center">
                    {interactionData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                {/* Tooltip handles the "hover to show number" logic */}
                                <Tooltip content={<CustomTooltip />} cursor={false} />

                                <Pie
                                    data={interactionData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={85}   // Thicker donut
                                    outerRadius={120}
                                    paddingAngle={8}    // Distinct gaps between segments
                                    cornerRadius={10}   // Softly rounded edges
                                    startAngle={90}
                                    endAngle={450}
                                    stroke="none"       // Removes white border for a cleaner look
                                    activeShape={{ stroke: '#f1f5f9', strokeWidth: 2 }} // Subtle highlight on hover
                                >
                                    {interactionData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                            className="hover:opacity-80 transition-opacity cursor-pointer"
                                        />
                                    ))}
                                </Pie>

                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    iconType="circle"
                                    iconSize={10}
                                    formatter={(value) => (
                                        <span className="text-sm font-semibold text-slate-500 px-2">{value}</span>
                                    )}
                                    wrapperStyle={{ paddingTop: '20px' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <p className="text-slate-400 text-sm font-medium">No interactions recorded yet.</p>
                            <p className="text-slate-400 text-xs mt-1">Engage with a friend to generate your analytics!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FriendshipAnalytics;