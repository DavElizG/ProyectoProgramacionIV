import { useState, useEffect } from 'react';
import { Product } from '../types/Product';

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch  {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();

    
    return () => {
      
    };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
