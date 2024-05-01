import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import useFetchAdd from '../Hooks/useFetchAdd';

const ProductAdd: React.FC = () => {
  const { setProductId } = useContext(MyContext);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: 0,
    images: [],
  });

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
    setNewProduct({
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: 0,
      images: [],
    });
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
          <textarea id="description" name="description" value={newProduct.description} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <input type="number" id="category" name="category" value={newProduct.category} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="images">Imágenes:</label>
          <input type="text" id="images" name="images" value={newProduct.images.join(',')} onChange={handleInputChange} className="form-control" />
        </div>
        <button onClick={handleAddProduct} type="button" className="btn btn-primary mr-2">Aceptar</button>
        <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  );
};

export default ProductAdd;
