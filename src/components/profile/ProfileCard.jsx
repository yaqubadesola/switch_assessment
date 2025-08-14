import { FaUserCircle } from "react-icons/fa";

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl shadow-md space-y-6 py-2 px-4 flex flex-col items-center justify-center space-x-6 w-full h-full">
      {/* User Profile Avatar */}
      <div className="flex-shrink-0">
        <FaUserCircle className="text-purple-600" size={70} />
      </div>

      {/* Profile Details */}
      <div>
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Profile Information
        </h2>
        <p className="text-gray-700">
          <strong>Name:</strong> {profile.name}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {profile.email}
        </p>
      </div>
    </div>
  );
}
