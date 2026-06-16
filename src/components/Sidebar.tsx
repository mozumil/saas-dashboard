export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-100 text-gray-800 p-4">
      <nav className="flex flex-col gap-4">
        <a href="#">Dashboard</a>
        <a href="#">Analytics</a>
        <a href="#">Invoice</a>
        <a href="#">Schedule</a>
        <a href="#">Calendar</a>
        <a href="#">Messages</a>
        <a href="#">Notifications</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
}