import React, { useState } from 'react';
import ProductsServices from '../hooks/products/GetProducts';
import { Product } from '../types/Products';
import Pager from './Pager';
import './Products.css';
import ProductForm from './ProductsForm';

const Products: React.FC = () => {
  const { data: products, loading, error } = ProductsServices();
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowForm(!showForm)}>Agregar Producto</button>
        {showForm && <ProductForm onSubmit={function (values: { title: string; price: number; description: string; categoryId: number; images: string[]; }): void {
          throw new Error('Function not implemented.');
        } } onCancel={function (): void {
          throw new Error('Function not implemented.');
        } } />} {/* Renderiza el formulario si showForm es true */}
     
      
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