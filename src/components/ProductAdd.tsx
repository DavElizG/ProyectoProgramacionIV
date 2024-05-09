import React from 'react';
import { useForm } from 'react-hook-form';
import useFetchAdd from '../Hooks/useFetchAdd';
import { useNavigate } from 'react-router-dom';

const ProductAdd: React.FC<{
  onSubmit: (values: { title: string; price: number; description: string; categoryId: number; images: string[] }) => void;
}> = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm<{
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  }>();
  const navigate = useNavigate();
  const { fetchCreateProduct, isLoading, error } = useFetchAdd();

  const onSubmitForm = async (data: {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  }) => {
    try {
      await fetchCreateProduct(data);
      navigate('/');
      onSubmit(data);
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Separar las URLs por coma y eliminar espacios en blanco
    const urls = e.target.value.split(',').map((url) => url.trim());
    setValue('images', urls);
  };

  return (
    <div className="container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" {...register('title')} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="number" className="form-control" id="price" {...register('price')} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <input type="text" className="form-control" id="description" {...register('description')} />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">Category ID:</label>
          <input type="number" className="form-control" id="categoryId" {...register('categoryId')} />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Images:</label>
          <input type="text" className="form-control" id="images" onChange={handleImagesChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>Aceptar</button>
        <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
        {isLoading && <p className="mt-2">Cargando...</p>}
        {error && <p className="mt-2 text-danger">Error: {error}</p>}
      </form>
    </div>
  );
};

export default ProductAdd;
