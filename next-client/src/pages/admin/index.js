import AdminLayout from '@/components/AdminLayout'
import React from 'react'
import header from '@/components/Adminheader'


const Dashboard = () => {
  return (
    <AdminLayout> <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    {/* <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-center text-2xl font-bold">
        Coffee Recs Dashboard
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Overview</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Top Recommendations</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Customer Preferences</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Feedback</a>
          </li>
        </ul>
      </nav>
    </aside> */}

    {/* Main Content */}
    

      {/* Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recommendation Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Top Coffee Recommendation</h3>
            <p className="text-xl">Dark Roast Blend</p>
            <p className="text-gray-600">Recommended to 250 customers</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Customer Preferences</h3>
            <p className="text-xl">Espresso-Based Drinks</p>
            <p className="text-gray-600">50% prefer strong coffee</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Recommendation Effectiveness</h3>
            <p className="text-xl">CTR: 8%</p>
            <p className="text-gray-600">Conversion Rate: 4.5%</p>
          </div>
        </div>

        {/* Recent Recommendations */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Recent Coffee Recommendations</h2>
        <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Recommended Coffee</th>
              <th className="p-4">Date</th>
              <th className="p-4">Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">John Doe</td>
              <td className="p-4">Medium Roast</td>
              <td className="p-4">Sept 5, 2024</td>
              <td className="p-4">Loved it!</td>
            </tr>
            <tr>
              <td className="p-4">Jane Smith</td>
              <td className="p-4">French Press Blend</td>
              <td className="p-4">Sept 4, 2024</td>
              <td className="p-4">Good, but prefer lighter roast.</td>
            </tr>
            <tr>
              <td className="p-4">Michael Brown</td>
              <td className="p-4">Dark Roast</td>
              <td className="p-4">Sept 4, 2024</td>
              <td className="p-4">Perfect!</td>
            </tr>
          </tbody>
        </table>

        {/* Customer Feedback */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Customer Feedback</h2>
        <div className="p-4 bg-white rounded shadow">
          <p className="text-lg">"The dark roast recommendation was spot on! I'll definitely order again."</p>
          <p className="text-gray-600">- Sarah Lee</p>
        </div>
      </main>
    </div>



</AdminLayout>
  )
}

export default Dashboard;