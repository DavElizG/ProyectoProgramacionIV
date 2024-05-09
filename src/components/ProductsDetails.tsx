import React from 'react';
import useFetchProductsDetails from '../Hooks/useFetchProductsDetails';
import { useNavigate } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  const { product } = useFetchProductsDetails();
  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Detalles del Producto</h2>
      <div className="card">
        <div className="card-body">
          {product ? (
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{product.id}</td>
                  </tr>
                  <tr>
                    <th>Title</th>
                    <td>{product.title}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>{product.price}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{product.description}</td>
                  </tr>
                  <tr>
                    <th>Image</th>
                    <td>
                      {product.images && product.images.length > 0 ? (
                        <>
                        <img src={product.images[0]} alt="Product" className="img-fluid" style={{ maxWidth: '200px' }} />
                        <img src={product.images[1]} alt="Product" className="img-fluid" style={{ maxWidth: '200px' }} />
                        <img src={product.images[2]} alt="Product" className="img-fluid" style={{ maxWidth: '200px' }} />
                        </>
                      ) : (
                        'No Image'
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="button" onClick={handleExit} className="btn btn-secondary">Salir</button>
            </div>
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
