export default function AccountList({ accounts, onView }) {
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "savings":
        return "bg-green-100 text-green-800 border-green-300";
      case "current":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "loan":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-6  text-center md:text-left">
        Your Accounts
      </h2>
      {accounts.length === 0 ? (
        <p className="text-gray-500">No accounts found.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {accounts.map((acc) => (
            <div
              key={acc.id}
              className={`w-72 p-5 rounded-xl border ${getTypeColor(
                acc.type
              )} shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className="text-lg font-bold mb-2">{acc.type} Account</h3>
              <p className="text-sm opacity-80">
                Account No: ****{acc.number.slice(-4)}
              </p>
              <p className="mt-3 text-xl font-bold">
                ₦{acc.balance.toLocaleString()}
              </p>
              <button
                onClick={() => onView(acc)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Transactions
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
