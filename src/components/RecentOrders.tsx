type Order = {
  trackingNo: string;
  productName: string;
  price: string;
  totalOrder: string;
  totalAmount: string;
};

type RecentOrdersProps = {
  orders: Order[];
};

export default function RecentOrders({
  orders,
}: RecentOrdersProps) {
  return (
    <div className="border h-80 p-4 rounded bg-white text-black">
      <h2 className="font-bold mb-4">Recent Orders</h2>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-3 text-xs uppercase tracking-wider text-gray-500">
              Tracking no
            </th>
            <th className="pb-3 text-xs uppercase tracking-wider text-gray-500">
              Product Name
            </th>
            <th className="pb-3 text-xs uppercase tracking-wider text-gray-500">
              Price
            </th>
            <th className="pb-3 text-xs uppercase tracking-wider text-gray-500">
              Total Order
            </th>
            <th className="pb-3 text-xs uppercase tracking-wider text-gray-500">
              Total Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.trackingNo} className="border-t border-gray-100">
              <td className="py-3">{order.trackingNo}</td>
              <td className="py-3">{order.productName}</td>
              <td className="py-3">{order.price}</td>
              <td className="py-3">{order.totalOrder}</td>
              <td className="py-3">{order.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}