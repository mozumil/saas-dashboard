import { Bell, Plus, Search } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Customer List
      </h1>

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              pl-10
              pr-4
              py-3
              w-72
              rounded-xl
              border
              border-gray-200
              bg-white
              outline-none
              focus:ring-2
              focus:ring-indigo-400
            "
          />
        </div>

      

        <button
          className="
            w-11
            h-11
            rounded-full
            bg-white
            border
            border-gray-200
            flex
            items-center
            justify-center
            hover:bg-gray-50
          "
        >
          <Bell size={20} className="text-gray-600" />
        </button>

        {/* Add Customer */}

        <button
          className="
            flex
            items-center
            gap-2
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            px-5
            py-3
            rounded-xl
            font-medium
            transition
          "
        >
          <Plus size={18} />
          Add Customer
        </button>

      </div>
    </header>
  );
}