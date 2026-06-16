type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white text-black border rounded p-4 shadow-sm">
      <h2 className="text-2xl font-bold">{value}</h2>
      <p>{label}</p>
    </div>
  );
}