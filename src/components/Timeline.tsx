import TaskCard from "./TaskCard";

const dates = ["29", "30", "01", "02", "03", "04", "05", "06"];

const tasks = [
  {
    time: "09:00 AM",
    title: "Graphic Design",
    priority: "Low",
    status: "On Track",
  },
  {
    time: "11:00 AM",
    title: "Dashboard Design",
    priority: "High",
    status: "On Track",
  },
  {
    time: "01:00 PM",
    title: "Logo Design",
    priority: "High",
    status: "On Track",
  },
  {
    time: "03:00 PM",
    title: "Web Design",
    priority: "High",
    status: "On Track",
  },
];

export default function Timeline() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      {/* Top Row */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex gap-4">
          {dates.map((day) => (
            <button
              key={day}
              className={`w-12 h-12 rounded-xl font-medium ${
                day === "02"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <button className="border border-gray-200 rounded-xl px-4 py-2 text-gray-600">
          December 2021
        </button>

      </div>

      {/* Timeline */}
      <div className="space-y-8">

        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex gap-8 items-start"
          >
            <p className="text-sm text-gray-500 w-24">
              {task.time}
            </p>

            <TaskCard
              title={task.title}
              priority={task.priority}
              status={task.status}
            />
          </div>
        ))}

      </div>

    </div>
  );
}