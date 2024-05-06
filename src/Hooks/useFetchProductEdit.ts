import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById, updateProduct } from '../services/ProductService';
import { Product } from '../types/Product';

const useFetchProductEdit = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [formData, setFormData] = useState<Product>({} as Product);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      const data = await getProductsById(productId);
      setProduct(data.data);
      setFormData(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(productId, formData);
      setProduct(formData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return { product, formData, setFormData, loading, error, handleUpdateProduct };
};

export default useFetchProductEdit;