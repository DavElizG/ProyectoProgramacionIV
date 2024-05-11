// ProductEdit.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchProductEdit from '../Hooks/useFetchProductEdit'; // Importa el hook personalizado para editar productos
import { Product } from '../types/Product';

const ProductEdit: React.FC = () => {
    // Obtiene el ID del producto de los parámetros de la URL
    const { productId } = useParams<{ productId: string; }>();

    // Usa el hook personalizado para obtener el producto, cargar, manejar errores y actualizar
    const { product, loading, error, handleUpdateProduct } = useFetchProductEdit();

    // Estado local para almacenar los datos del formulario
    const [formData, setFormData] = useState<Product>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: 0,
        images: []
    });

    // Efecto para actualizar los datos del formulario cuando cambia el producto
    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    
    const navigate = useNavigate();
    // Maneja la acción de cancelar
    const handleCancel = () => {
        navigate('/'); // Redirige a la página principal y actualiza la página
    };

    // Maneja la presentación del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await handleUpdateProduct(formData);
            navigate('/'); // Redirige a la página principal y actualiza la página
        } catch (error) {
            console.error('Error al actualizar producto:', error);
        }
    };

    // Maneja el cambio en los campos de entrada de texto
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Maneja el cambio en el campo de entrada de imágenes
    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.value.split(',').map(image => image.trim());
        setFormData(prevFormData => ({
            ...prevFormData,
            images,
        }));
    };

    // Efecto para manejar errores
    useEffect(() => {
        if (error) {
            console.error('Error:', error);
        }
    }, [error]);

    // Muestra un mensaje de carga mientras se carga el producto
    if (loading) return <div>Loading...</div>;

    // Muestra un mensaje de error si hay algún error
    if (error) return <div>Error: {error}</div>;

    // Devuelve el formulario para editar el producto
    return (
        <div className="container mt-4">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Título:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoría:</label>
                    <input type="number" id="category" name="category" value={formData.category} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="images" className="form-label">Imágenes:</label>
                    <input type="text" id="images" name="images" value={formData.images.join(',')} onChange={handleImagesChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mr-2">Guardar</button>
                <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
                {loading && <p className="mt-2">Cargando...</p>}
                {error && <p className="mt-2 text-danger">Error: {error}</p>}
            </form>
        </div>
    );
};

export default ProductEdit;
