// useFetchProductEdit.ts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById, updateProduct } from '../services/ProductService';
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
  const [formData, setFormData] = useState<Product>({
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
        setFormData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(productId || '', formData);
      setProduct(formData);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.value.split(',').map(image => image.trim());
    setFormData(prevFormData => ({
      ...prevFormData,
      images,
    }));
  };

  return { product, formData, setFormData, loading, error, handleUpdateProduct, handleInputChange, handleImagesChange };
};

export default useFetchProductEdit;
