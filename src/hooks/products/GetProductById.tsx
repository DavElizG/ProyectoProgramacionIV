import { useContext, useState, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";

const GetProductById = () => {
  const { productId } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default GetProductById;