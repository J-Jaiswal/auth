import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData] = useState({
    name: "Jayesh Jaiswal",
    email: "jay@example.com",
  });

  const expenses = [
    { date: "2024-10-01", amount: 150 },
    { date: "2024-10-05", amount: 200 },
    { date: "2024-10-10", amount: 300 },
  ];

  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login");
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center rounded-lg px-16">
        <h1 className="text-2xl text-black font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-[#387478] hover:bg-[#629584] text-white px-4 py-2 rounded-lg "
        >
          Logout
        </button>
      </header>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-12">
        {/* User Information ----> */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">User Info</h2>
          <p className="mt-2">Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>

        {/* Statistics Summary ----> */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Statistics</h2>
          <p className="mt-2">Total Expenses: ${totalExpenses}</p>
          <p>Number of Transactions: {expenses.length}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-12">
        {/* Bar Chart ----> */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Expenses Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expenses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#629584" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart ----> */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Expenses Line Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={expenses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
