import React from 'react';
import ProductsServices from '../hooks/products/GetProducts';
import { Product } from '../types/Products';
import Pager from './Pager';
import './Products.css';

const Products: React.FC = () => {
  const { data: products, loading, error } = ProductsServices();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button>Agregar Producto</button>

      </div>
      <Pager />
      <table className='table-container'>
        <thead>
          <tr className='header-columns'>
            <th>Id</th>
            <th>Precio</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.price}</td>
              <td>{product.title}</td>
              <td>{product.category.name}</td>
              <td className='column-actions'>
                <button type='button' onClick={() => console.log('Ver Producto', product.id)}>
                  Ver Producto
                </button>
                <button type='button' onClick={() => console.log('Eliminar', product.id)}>
                  Eliminar
                </button>
                <button type='button' onClick={() => console.log('Editar', product.id)}>
                  Editar
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
        
      </table>
      <Pager />
    </div>
  );
};

export default Products;