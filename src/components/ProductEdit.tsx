import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchProductEdit from '../Hooks/useFetchProductEdit';

const ProductEdit: React.FC = () => {
    const navigate = useNavigate();
    const { formData, setFormData, loading, error, handleUpdateProduct } = useFetchProductEdit();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.value.split(',').map(image => image.trim());
        setFormData(prevFormData => ({
            ...prevFormData,
            images,
        }));
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleUpdateProduct(); // Asegúrate de que esta función maneje la navegación post-actualización o muestre un mensaje de éxito/error.
    };

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
                {/* ...otros campos del formulario */}
                <div className="form-group">
                    <label htmlFor="images">Imágenes:</label>
                    <input type="text" id="images" name="images" value={formData.images.join(',')} onChange={handleImagesChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                    Guardar
                </button>
                <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancelar</button>
            </form>
        </div>
    );
};

export default ProductEdit;
