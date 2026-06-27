import { ChevronRight } from "lucide-react";

const sections = [
  "To Do",
  "Doing",
  "Done",
];

export default function TaskSidebar() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        <button className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          List
        </button>

        <button className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          Board
        </button>

        <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white">
          Timeline
        </button>
      </div>

      {/* Status Cards */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`flex items-center justify-between rounded-xl border px-4 py-4 transition ${
              index === 0
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white hover:bg-gray-50 border-gray-200"
            }`}
          >
            <span className="font-medium">
              {section}
            </span>

            <ChevronRight size={18} />
          </div>
        ))}
      </div>

    </div>
  );
}