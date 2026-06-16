import StatCard from "@/components/StatCard";
import RecentOrders from "@/components/RecentOrders";
import TopSellingProducts from "@/components/TopSellingProducts";

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
    <div className="flex min-h-screen bg-slate-50">
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

      <main className="flex-1 p-4 space-y-4">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="flex gap-4">
            <button className="border px-3 py-2 rounded">15-06-2026</button>
            <button className="border px-3 py-2 rounded">10-10-2026</button>
          </div>
        </header>

        <section className="grid grid-cols-4 gap-4">
         {stats.map((stat) => (
          <StatCard
           key={stat.label}
           value={stat.value}
           label={stat.label}
          />
        ))}
        </section>
        
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white text-black border rounded p-4 shadow-sm col-span-2 h-64">Analytics chart</div>
          <div className="bg-white text-black border rounded p-4 shadow-sm h-64">Report Chart</div>
        </section>
        
        <section className="grid grid-cols-2 gap-4">

          <RecentOrders orders={orders} />
          
          <TopSellingProducts products={topSellingProducts} />

         
        </section>
      </main>

    </div>
  )   
}

