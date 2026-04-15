import Image from "next/image";

export const FriendCard = ({ name, image, lastMet, tag, status }) => {
  // Mapping the status to the exact colors in your screenshot
  const statusColors = {
    "Almost Due": "bg-[#f1b45c] text-white", // The mustard yellow
    Overdue: "bg-[#ef4444] text-white", // Red
    "On Track": "bg-[#22c55e] text-white", // Green
  };

  return (
    <div className="card bg-white shadow-2xl shadow-slate-200/60 rounded-[2.5rem] p-10 flex flex-col items-center text-center border-none w-80">
      {/* Profile Avatar */}
      <div className="avatar mb-6">
        <div className="w-32 h-32 rounded-full relative overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Name and Relative Time */}
      <h3 className="font-bold text-3xl text-[#1e293b] mb-1 tracking-tight">
        {name}
      </h3>
      <p className="text-sm font-medium text-slate-400 mb-6">{lastMet}</p>

      {/* Category Tag (Work/Family/etc) */}
      <div className="mb-8">
        <span className="bg-[#dcfce7] text-[#15803d] font-bold py-2 px-6 rounded-full text-xs tracking-widest uppercase">
          {tag}
        </span>
      </div>

      {/* Status Action Button */}
      <button
        className={`btn btn-md no-animation border-none rounded-full px-10 font-bold text-sm h-14 shadow-lg shadow-orange-200/40 ${statusColors[status] || "bg-slate-200"}`}
      >
        {status}
      </button>
    </div>
  );
};
