import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Ürün A", stok: 120 },
  { name: "Ürün B", stok: 80 },
  { name: "Ürün C", stok: 40 },
  { name: "Ürün D", stok: 150 },
];

function Dashboard() {
  return (
    <div>
      <h2>Stok Durumu</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Bar dataKey="stok" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Dashboard;
