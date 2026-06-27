import { Bell, Search } from "lucide-react";

export default function SettingsHeader() {
  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Task Preview
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white outline-none w-64"
          />
        </div>

        <Bell
          size={22}
          className="text-gray-500 cursor-pointer"
        />

        <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-xl font-medium">
          + Add Task
        </button>

      </div>
    </header>
  );
}