import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../services/ProductService';
import { Product } from '../types/Product';


const useFetchProductsDetails = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const { productId } = useParams();
  
  const fetchProducts = async () => {
    try {
      const data = await getProductsById(productId)
      setProduct(data.data);
      setLoading(false);
    } catch  {
      setError(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();

  }, [productId]);

  
  return { product, loading, error };
};

export default useFetchProductsDetails;
