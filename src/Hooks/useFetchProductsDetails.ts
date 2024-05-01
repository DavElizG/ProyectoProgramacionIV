import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

const useFetchProductsDetails = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { productId, setProductId } = useContext(MyContext);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    // Cleanup function
    return () => {
      // Si necesitas alguna limpieza al desmontar el componente, agrégalo aquí
    };
  }, [productId]);

  const ver = (productId: number) => {
    setProductId(productId);
  };

  return { products, loading, error, ver };
};

export default useFetchProductsDetails;
