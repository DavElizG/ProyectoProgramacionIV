// useFetchProductEdit.ts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById, updateProduct } from '../services/ProductService';
import { Product } from '../types/Product';

const useFetchProductEdit = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
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

    const handleUpdateProduct = async (updatedProduct: Product) => {
        try {
            await updateProduct(productId || '', updatedProduct);
            setProduct(updatedProduct);
        } catch (error) {
            setError(error.message);
        }
    };

    return { product, loading, error, handleUpdateProduct };
};

export default useFetchProductEdit;
