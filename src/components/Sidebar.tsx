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
    <aside className="w-56 bg-gray-100 text-gray-800 p-4">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200"
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