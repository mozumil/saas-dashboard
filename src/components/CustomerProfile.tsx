import Card from "./Card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function CustomerProfile() {
  return (
    <Card className="h-full">
      {/* Profile */}

      <div className="flex flex-col items-center pb-8 border-b border-gray-200">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />

        <h2 className="text-2xl font-semibold text-gray-800">
          John Deo
        </h2>

        <p className="text-gray-500 mt-1">
          UI/UX Designer
        </p>
      </div>

      {/* Contact */}

      <div className="py-8 border-b border-gray-200">
        <h3 className="font-semibold text-lg text-gray-800 mb-6">
          Contact Info
        </h3>

        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Mail size={18} className="text-indigo-600" />
            </div>

            <span className="text-gray-600">
              kajope5182@ummoh.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Phone size={18} className="text-green-600" />
            </div>

            <span className="text-gray-600">
              33757005467
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <MapPin size={18} className="text-red-500" />
            </div>

            <span className="text-gray-600">
              2239 Hog Camp Road
            </span>
          </div>

        </div>
      </div>

      {/* Performance */}

      <div className="pt-8">
        <h3 className="font-semibold text-lg text-gray-800 mb-6">
          Performance
        </h3>

        {/* Sales */}

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Sales</span>
            <span className="font-medium">72%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 w-[72%] bg-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Projects */}

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Projects</span>
            <span className="font-medium">60%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 w-[60%] bg-orange-500 rounded-full"></div>
          </div>
        </div>

      </div>
    </Card>
  );
}