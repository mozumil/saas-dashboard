export default function Home() {
  return (
    <div className="flex min-h-screen">
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
        <header className="border p-4 rounded">
          Header
        </header>

        <section className="grid grid-cols-4 gap-4">
          <div className="border p-4 rounded">Card 1</div>
          <div className="border p-4 rounded">Card 2</div>
          <div className="border p-4 rounded">Card 3</div>
          <div className="border p-4 rounded">Card 4</div>
        </section>
        
        <section className="grid grid-cols-3 gap-4">
          <div className="border col-span-2 h-64 p-4 rounded">Analytics chart</div>
          <div className="border h-64 p-4 rounded">Report Chart</div>
        </section>
        
        <section className="grid grid-cols-2 gap-4">
          <div className="border h-80 p-4 rounded">Recent orders</div>
          <div className="border h-80 p-4 rounded">Products</div>
        </section>
      </main>

    </div>
  )
}