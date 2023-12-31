import Chart from "./Chart";
const Dashboard = () => {
  return (
    <div className="flex flex-col py-12 px-14 space-y-6">
      <h2>Dashboard</h2>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Your Balance</span>
          <span className="text-gray-500 text-3xl font-bold">120,000 LKR</span>
        </div>

        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Your Expenses</span>
          <span className="text-gray-500 text-3xl font-bold">20,000 LKR</span>
        </div>
      </div>

      <div className="flex space-x-8 w-4/5 flex-col">
        <h2>Expenses Chart</h2>
        <Chart />
      </div>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Your Activity</span>
          <span className="text-gray-500 mt-4">
            Sent 10,000 LKR to Aashif Ahd
          </span>
        </div>

        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Pending Bills</span>
          <span className="text-gray-500 mt-4">4,000 LKR - WIFI</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
