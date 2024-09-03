import AdminLayout from '../../components/AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl">Total Coffees</h3>
          <p className="mt-2 text-gray-600">100</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl">New Orders</h3>
          <p className="mt-2 text-gray-600">30</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl">Pending Reviews</h3>
          <p className="mt-2 text-gray-600">15</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
