import React from 'react';
import { useProductContext } from '../Context/ProductContext';

const ProductList: React.FC = () => {
    // Obtén los productos y el estado de carga del contexto
    const { products, loading } = useProductContext();
  
    // Renderiza mientras se cargan los productos
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Renderiza la lista de productos una vez que se hayan cargado
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <h3>{product.title}</h3> {/* Mostrar el título del producto */}
                <p>ID: {product.id}</p> {/* Mostrar el ID del producto */}
                <p>Price: ${product.price}</p> {/* Mostrar el precio del producto */}
                {product.description && (
                  <p>Description: {product.description}</p> 
                )}
                {product.image && (
                  <img src={product.image} alt={product.title} /> 
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;