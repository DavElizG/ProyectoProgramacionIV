// GetProducts.tsx

import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";


const GetProducts = () => {
  const { pageNumber } = useContext(ProductsContext);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10${pageNumber}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default GetProducts; // Aquí está el export por defecto