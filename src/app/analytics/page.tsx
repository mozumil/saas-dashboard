import Sidebar from "@/components/Sidebar";
import AnalyticsHeader from "@/components/AnalyticsHeader";
import CustomerTable from "@/components/CustomerTable";
import CustomerProfile from "@/components/CustomerProfile";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <main className="flex-1 p-6 space-y-6">

        <AnalyticsHeader />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <CustomerTable />
          </div>

          <CustomerProfile />

        </section>

      </main>

    </div>
  );
}