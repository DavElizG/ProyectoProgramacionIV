// ProductEdit.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchProductEdit from '../Hooks/useFetchProductEdit';

const ProductEdit: React.FC = () => {
    useParams<{ productId: string; }>();
    const { formData, loading, error, hansdleUpdateProduct, handleInputChange, handleImagesChange } = useFetchProductEdit();

    const handleCancel = () => {
        window.location.href = '/'; // Redirige a la página principal y actualiza la página
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await handleUpdateProduct();
            window.location.href = '/'; // Redirige a la página principal y actualiza la página
        } catch (error) {
            console.error('Error al actualizar producto:', error);
        }
    };

    useEffect(() => {
        if (error) {
            console.error('Error:', error);
        }
    }, [error]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-4">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Categoría:</label>
                    <input type="number" id="category" name="category" value={formData.category} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="images">Imágenes:</label>
                    <input type="text" id="images" name="images" value={formData.images.join(',')} onChange={handleImagesChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mr-2">Guardar</button>
                <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
            </form>
        </div>
    );
};

export default ProductEdit;
