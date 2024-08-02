import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 ">
        <h3 className="text-lg font-bold">Total Users</h3>
        <p className="text-2xl">1,234</p>
      </div>
      <div className="bg-white p-4 ">
        <h3 className="text-lg font-bold">Books Sold</h3>
        <p className="text-2xl">567</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">Revenue</h3>
        <p className="text-2xl">$2,345</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">New Signups</h3>
        <p className="text-2xl">89</p>
      </div>
    </div>
  )
}

export default Dashboard
