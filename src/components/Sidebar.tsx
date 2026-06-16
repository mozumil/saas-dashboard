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
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black transition"
            >
              <Icon size={18} />
              {item.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}