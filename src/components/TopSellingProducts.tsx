type Product = {
  name: string;
  price: string;
};

type TopSellingProductsProps = {
  products: Product[];
};

export default function TopSellingProducts({
  products,
}: TopSellingProductsProps) {
  return (
    <div className="border h-80 p-4 rounded bg-white text-black">
      <h2 className="font-bold mb-4">Top Selling Products</h2>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="border-b border-gray-100 pb-3"
          >
            <h3 className="font-medium">
               {product.name}
            </h3>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}