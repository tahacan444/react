import React from "react";
import Dashboard from "./components/Dashboard";
import ProductList from "./components/ProductList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <h1>Stok Yönetimi Optimizasyonu</h1>
      <Dashboard />
      <ProductList />
      <ToastContainer />
    </div>
  );
}

export default App;

