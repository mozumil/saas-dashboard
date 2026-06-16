type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={`bg-white text-black border rounded p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}