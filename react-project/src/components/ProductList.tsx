import React, { useState } from "react";
import { toast } from "react-toastify";

const initialProducts = [
  { id: 1, name: "Ürün A", stok: 120, threshold: 50 },
  { id: 2, name: "Ürün B", stok: 80, threshold: 40 },
  { id: 3, name: "Ürün C", stok: 40, threshold: 30 },
  { id: 4, name: "Ürün D", stok: 150, threshold: 100 },
];

function ProductList() {
  const [products, setProducts] = useState(initialProducts);

  const handleStockChange = (id: number, value: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedStock = parseInt(value) || 0;
        if (updatedStock <= product.threshold) {
          toast.warn(`${product.name} stoğu azaldı, yeniden sipariş verin!`);
        }
        return { ...product, stok: updatedStock };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Ürün Listesi</h2>
      <table>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Stok Miktarı</th>
            <th>Eşik</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <input
                  type="number"
                  value={product.stok}
                  onChange={(e) => handleStockChange(product.id, e.target.value)}
                />
              </td>
              <td>{product.threshold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
