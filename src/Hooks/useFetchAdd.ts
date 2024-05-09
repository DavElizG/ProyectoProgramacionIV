// useFetchAdd.ts
import { useState } from 'react';
import { createProduct } from '../services/ProductService';

const useFetchAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchCreateProduct = async (product:any) => {
    setIsLoading(true);
    try {
      const response = await createProduct(product);
      setData(response.data);
    } catch {
      setError(error);
    }
    setIsLoading(false);
  };

  return { fetchCreateProduct, isLoading, error, data };
};

export default useFetchAdd;
