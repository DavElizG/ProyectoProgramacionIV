import React from 'react';
import { Link } from 'react-router-dom';
import useFetchProducts from '../Hooks/useFetchProducts';
import useFetchProductsDetails from '../Hooks/useFetchProductsDetails';

const ProductTable = () => {
  const { products, loading, error } = useFetchProducts();
  const {ver} = useFetchProductsDetails();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
   
      <h2>Productos</h2>
      <Link to="/add" className="btn btn-success mb-3">Agregar Producto</Link>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Imágenes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category.name}</td>
                <td>
                  <div className="d-flex flex-wrap">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className="product-image img-thumbnail m-1"
                        style={{ width: '50px', height: '50px' }}
                      />
                    ))}
                  </div>
                </td>
                <td className="align-middle">
                  <div className="btn-group" role="group" aria-label="Acciones">
                  <Link to={`/product/${product.id}`} onClick={() => ver(product.id)}className="btn btn-primary"> Ver</Link>
                    <Link  onClick={()=> ver(product.id)} to={`/product/${product.id}`} >Ver</Link>
                    <Link to={`/product/edit/${product.id}`} className="btn btn-info">Editar</Link>
                    {/* Agrega aquí el botón de eliminar si es necesario */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
