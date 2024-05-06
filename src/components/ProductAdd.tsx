import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetchAdd from '../Hooks/useFetchAdd';
import { Product } from '../types/Product';

const ProductAdd: React.FC = () => {
 
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: 0,
    images: [],
  });

  const navigate = useNavigate(); // Obteniendo el objeto de historial

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddProduct = async () => {
    try {
      await useFetchAdd(newProduct);
      setNewProduct({
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: 0,
        images: [],
      });
      console.log('Producto agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar el producto:', error.message);
    }
  };

  const handleCancel = () => {
    // Redirigir de vuelta a la página "home"
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Producto</h2>
      <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" name="title" value={newProduct.title} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" name="price" value={newProduct.price} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea id="description" name="description" value={newProduct.description} onChange={handleInputChange} className="form-control" /><textarea/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <input type="number" id="category" name="category" value={newProduct.category} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="images">Imágenes:</label>
          <input type="text" id="images" name="images"  onChange={handleInputChange} className="form-control" />
        </div>
        <button type="button" onClick={handleAddProduct} className="btn btn-primary mr-2">Aceptar</button>
        <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  );
};

export default ProductAdd;
