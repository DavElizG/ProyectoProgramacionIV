import React from 'react';
import useFetchProductsDetails from '../Hooks/useFetchProductsDetails';



const ProductDetails: React.FC = () => {
const {product} = useFetchProductsDetails();

return (
  <div className="container mt-4">
    <h2>Detalles del Producto</h2>
    <div className="card">
      <div className="card-body">
        {product ? (
          <table className="table table-bordered">
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
          </table>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
   
  </div>
);
};

export default ProductDetails;
