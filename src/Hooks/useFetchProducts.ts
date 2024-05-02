import { useState, useEffect } from 'react';
import { getProducts } from '../services/ProductService';


const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();

    // Cleanup function
    return () => {
      // Si necesitas alguna limpieza al desmontar el componente, agrégalo aquí
    };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
