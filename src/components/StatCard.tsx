type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
      <p className="text-gray-500 text-sm mt-1">
        {label}
      </p>
    </div>
  );
}