import Card from "./Card";
import { MoreHorizontal } from "lucide-react";

const customers = [
  {
    name: "John Deo",
    email: "johndoe2211@gmail.com",
    phone: "+33757005467",
    gender: "Male",
    image: "https://i.pravatar.cc/40?img=11",
  },
  {
    name: "Shelby Goode",
    email: "shelbygoode41@gmail.com",
    phone: "+33757005467",
    gender: "Female",
    image: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Robert Bacins",
    email: "robertbacins4182@.com",
    phone: "+33757005467",
    gender: "Male",
    image: "https://i.pravatar.cc/40?img=14",
  },
  {
    name: "John Carilo",
    email: "john.carilo182@.com",
    phone: "+33757805467",
    gender: "Male",
    image: "https://i.pravatar.cc/40?img=18",
  },
  {
    name: "Adriene Watson",
    email: "adrienewatson82@.com",
    phone: "+83757035467",
    gender: "Female",
    image: "https://i.pravatar.cc/40?img=32",
  },
  {
    name: "Jhon Deo",
    email: "johndeo24823@.com",
    phone: "+63475700546",
    gender: "Male",
    image: "https://i.pravatar.cc/40?img=25",
  },
  {
    name: "Mark Ruffalo",
    email: "markruffalo3735@.com",
    phone: "+33757005467",
    gender: "Male",
    image: "https://i.pravatar.cc/40?img=36",
  },
  {
    name: "Bethany Jackson",
    email: "bethanyjackson5@.com",
    phone: "+33757005467",
    gender: "Female",
    image: "https://i.pravatar.cc/40?img=47",
  },
];

export default function CustomerTable() {
  return (
    <Card>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="py-4 px-6 text-sm font-semibold text-gray-500">
              Name
            </th>

            <th className="py-4 text-sm font-semibold text-gray-500">
              Email
            </th>

            <th className="py-4 text-sm font-semibold text-gray-500">
              Phone number
            </th>

            <th className="py-4 text-sm font-semibold text-gray-500">
              Gender
            </th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.email}
              className="border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <span className="font-medium text-gray-700">
                    {customer.name}
                  </span>
                </div>
              </td>

              <td className="text-gray-500">
                {customer.email}
              </td>

              <td className="text-gray-500">
                {customer.phone}
              </td>

              <td>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    customer.gender === "Male"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {customer.gender}
                </span>
              </td>

              <td className="text-right pr-6">
                <button className="text-gray-400 hover:text-gray-700">
                  <MoreHorizontal size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}