import StatCard from "@/components/StatCard";

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

          <div className="border h-80 p-4 rounded">
            <h2 className="font-bold mb-4">Recent Orders</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-3 text-sm text-gray-500 font-medium">Tracking no</th>
                  <th className="pb-3 text-sm text-gray-500 font-medium">Product Name</th>
                  <th className="pb-3 text-sm text-gray-500 font-medium">Price</th>
                  <th className="pb-3 text-sm text-gray-500 font-medium">Total Order</th>
                  <th className="pb-3 text-sm text-gray-500 font-medium">Total Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-2">#876364</td>
                  <td className="py-2">Camera Lens</td>
                  <td className="py-2">$178</td>
                  <td className="py-2">325</td>
                  <td className="py-2">$1,46,660</td>
                </tr>

                <tr>
                  <td className="py-2">#876368</td>
                  <td className="py-2">Black Sleep Dress</td>
                  <td className="py-2">$14</td>
                  <td className="py-2">53</td>
                  <td className="py-2">$46,660</td>
                </tr>

                <tr>
                  <td className="py-2">#876412</td>
                  <td className="py-2">Argan Oil</td>
                  <td className="py-2">$21</td>
                  <td className="py-2">78</td>
                  <td className="py-2">$3,46,676</td>
                </tr>

                <tr>
                  <td className="py-2">#876621</td>
                  <td className="py-2">EAU DE Parfum</td>
                  <td className="py-2">$32</td>
                  <td className="py-2">98</td>
                  <td className="py-2">$3,46,981</td>
                </tr>
              </tbody>

            </table>
          </div>

          <div className="border h-80 p-4 rounded bg-white text-black">
            <h2 className="font-bold mb-4">
              Top Selling Products
            </h2>

            <div className="space-y-4">
              {topSellingProducts.map((product) => (
               <div key={product.name}>
                 <h3>{product.name}</h3>
                 <p className="font-bold">{product.price}</p>
               </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  )   
}

