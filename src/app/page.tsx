import StatCard from "@/components/StatCard";
import RecentOrders from "@/components/RecentOrders";
import TopSellingProducts from "@/components/TopSellingProducts";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import Card from "@/components/Card";

export default function Home() {

  const stats = [
    { value: "178+", label: "Save Products" },
    { value: "20+", label: "Stock Products" },
    { value: "190+", label: "Sales Products" },
    { value: "12+", label: "Job Application" },
  ];
  
  const topSellingProducts = [
    { name: "Nike Shoes Black Pattern", price: "$87" },
    { name: "iPhone 12", price: "$987" },
  ];

  const orders = [
  {
    trackingNo: "#876364",
    productName: "Camera Lens",
    price: "$178",
    totalOrder: "325",
    totalAmount: "$1,46,660",
  },
  {
    trackingNo: "#876368",
    productName: "Black Sleep Dress",
    price: "$14",
    totalOrder: "53",
    totalAmount: "$46,660",
  },
  {
    trackingNo: "#876412",
    productName: "Argan Oil",
    price: "$21",
    totalOrder: "78",
    totalAmount: "$3,46,676",
  },
  {
    trackingNo: "#876621",
    productName: "EAU DE Parfum",
    price: "$32",
    totalOrder: "98",
    totalAmount: "$3,46,981",
  },
];

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />
      

      <main className="flex-1 p-4 space-y-4">
        
        <DashboardHeader />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {stats.map((stat) => (
          <StatCard
           key={stat.label}
           value={stat.value}
           label={stat.label}
          />
        ))}
        </section>
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 h-64">
            <div className="h-full flex items-center justify-center text-gray-400">
               Reports Chart Placeholder
            </div>
          </Card>

          <Card className="h-64">
            <div className="h-full flex items-center justify-center text-gray-400">
               Analytics Chart Placeholder
            </div>
          </Card>
        </section>
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <RecentOrders orders={orders} />
          
          <TopSellingProducts products={topSellingProducts} />

         
        </section>
      </main>

    </div>
  )   
}

