import React, { createContext, useContext, useState, useEffect } from 'react';

// Define el tipo de datos para un producto
export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
}

// Define el tipo de contexto
interface ProductContextType {
  products: Product[];
  loading: boolean;
}

// Crea el contexto
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Define las propiedades esperadas por el proveedor de contexto
interface ProductProviderProps {
  children: React.ReactNode;
}

// Define el proveedor de contexto
export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }} key="product-context">
      {children}
    </ProductContext.Provider>
  );
};

// Función de utilidad para consumir el contexto en los componentes
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
