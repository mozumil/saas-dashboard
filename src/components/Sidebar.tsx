import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Analytics", icon: BarChart3 },
  { name: "Invoice", icon: FileText },
  { name: "Calendar", icon: Calendar },
  { name: "Messages", icon: MessageSquare },
  { name: "Notifications", icon: Bell },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-8 text-gray-600">
         LOGO
        </h2>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <Icon size={18} />
              {item.name}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t ">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/41"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <p className="font-medium text-gray-500">USER</p>
            <p className="text-sm text-gray-500">
             Admin
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
}