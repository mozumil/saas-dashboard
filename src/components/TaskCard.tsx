import { MoreHorizontal } from "lucide-react";

type TaskCardProps = {
  title: string;
  priority: string;
  status: string;
};

export default function TaskCard({
  title,
  priority,
  status,
}: TaskCardProps) {
  return (
    <div className="flex-1 flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition">

      {/* Left */}
      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          className="w-5 h-5 accent-indigo-600"
        />

        <h3 className="font-medium text-gray-800">
          {title}
        </h3>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Team Avatars */}
        <div className="flex -space-x-2">

          <img
            src="https://i.pravatar.cc/40?img=11"
            className="w-8 h-8 rounded-full border-2 border-white"
            alt=""
          />

          <img
            src="https://i.pravatar.cc/40?img=12"
            className="w-8 h-8 rounded-full border-2 border-white"
            alt=""
          />

          <img
            src="https://i.pravatar.cc/40?img=13"
            className="w-8 h-8 rounded-full border-2 border-white"
            alt=""
          />

          <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm border-2 border-white">
            +
          </div>

        </div>

        {/* Priority */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            priority === "High"
              ? "bg-cyan-100 text-cyan-700"
              : "bg-pink-100 text-pink-600"
          }`}
        >
          {priority}
        </span>

        {/* Status */}
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
          {status}
        </span>

        <button className="text-gray-400 hover:text-gray-700">
          <MoreHorizontal size={18} />
        </button>

      </div>

    </div>
  );
}