// useFetchProductEdit.ts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../services/ProductService';
import { Product } from '../types/Product';

const useFetchProductEdit = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: 0,
    images: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductsById(productId);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useFetchProductEdit;
