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
            <th className="pb-3 text-sm text-gray-500 font-medium">
              Tracking no
            </th>
            <th className="pb-3 text-sm text-gray-500 font-medium">
              Product Name
            </th>
            <th className="pb-3 text-sm text-gray-500 font-medium">
              Price
            </th>
            <th className="pb-3 text-sm text-gray-500 font-medium">
              Total Order
            </th>
            <th className="pb-3 text-sm text-gray-500 font-medium">
              Total Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.trackingNo}>
              <td className="py-2">{order.trackingNo}</td>
              <td className="py-2">{order.productName}</td>
              <td className="py-2">{order.price}</td>
              <td className="py-2">{order.totalOrder}</td>
              <td className="py-2">{order.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}