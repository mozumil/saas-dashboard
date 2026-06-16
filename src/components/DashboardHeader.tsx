export default function DashboardHeader() {
    return (
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex gap-4">
                <button className="border px-3 py-2 rounded">15-06-2026</button>
                <button className="border px-3 py-2 rounded">10-10-2026</button>
            </div>
        </header>
    )
}