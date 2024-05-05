import { useContext, useState, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";
import GetProductById from "./GetProductById";
import { Product } from "../../types/Products";

const UpdateProduct = () => {
  const { productId } = useContext(ProductsContext);
  const { product, loading: loadingProduct, error: errorProduct } = GetProductById();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateProduct = async (updatedProduct? : Product) => {
    try {
      setLoading(true);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { product, loading: loading || loadingProduct, error: error || errorProduct, updateProduct };
};

export default UpdateProduct;