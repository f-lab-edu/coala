export default function TotalBalance() {
  return (
    <div className="mb-6">
      <h3 className="text-gray-500">Total balance</h3>
      <div className="flex items-center justify-between space-x-2">
        <span className="text-5xl font-bold">$25,291.50</span>
        <div className="flex flex-col text-right">
          <span className="text-sm font-bold text-green-500">+130.65%</span>
          <span className="text-sm text-gray-400">+$2,367.62</span>
        </div>
      </div>
    </div>
  );
}
