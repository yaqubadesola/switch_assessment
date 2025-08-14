export default function TransactionsTable({ accountType, transactions }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-2xl shadow-md">
      {/* Title with account badge */}
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
        <span
          className={`ml-3 px-3 py-1 text-sm rounded-full font-semibold 
            ${
              accountType === "Savings"
                ? "bg-green-100 text-green-700"
                : accountType === "Current"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {accountType} Account
        </span>
      </div>

      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700">
                <th className="p-3 text-sm font-semibold">Date</th>
                <th className="p-3 text-sm font-semibold">Description</th>
                <th className="p-3 text-sm font-semibold">Type</th>
                <th className="p-3 text-sm font-semibold">Amount</th>
                <th className="p-3 text-sm font-semibold">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3 text-sm text-gray-600">{tx.date}</td>
                  <td className="p-3 text-sm text-gray-800">
                    {tx.description}
                  </td>
                  <td className="p-3">
                    {tx.type === "credit" ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        Credit
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        Debit
                      </span>
                    )}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      tx.type === "credit" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ₦{tx.amount.toLocaleString()}
                  </td>
                  <td className="p-3 text-gray-700">
                    ₦{tx.balance.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
