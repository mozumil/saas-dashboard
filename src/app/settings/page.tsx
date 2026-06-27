import Sidebar from "@/components/Sidebar";
import SettingsHeader from "@/components/SettingsHeader";
import TaskSidebar from "@/components/TaskSidebar";
import Timeline from "@/components/Timeline";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <SettingsHeader />

        <div className="mt-8 grid grid-cols-1 xl:grid-cols-4 gap-6">

          <TaskSidebar />

          <div className="xl:col-span-3">
            <Timeline />
          </div>

        </div>
      </main>
    </div>
  );
}