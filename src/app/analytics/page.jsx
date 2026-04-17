"use client";

import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip
} from 'recharts';

const interactionData = [
    { name: 'Text', value: 35, color: '#a855f7' },
    { name: 'Call', value: 40, color: '#14532d' }, // Darker forest green
    { name: 'Video', value: 25, color: '#22c55e' }, // Vibrant green
];

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
                </div>
            </div>
        </div>
    );
};

export default FriendshipAnalytics;