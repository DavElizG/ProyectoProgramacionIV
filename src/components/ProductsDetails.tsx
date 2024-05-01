import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import fetchProductDetails from '../Hooks/useFetchProductsDetails';

const ProductDetails: React.FC = () => {
  
  const { products } = fetchProductDetails();

  if (!products) return <p>No se encontraron detalles para el producto.</p>;

  return (
    <div className="container mt-4">
      <h2>Detalles del Producto</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
            {products?.map((item:any) => (
         <li key={item.id}>
          <p>{item.id}</p>  <br />
         <span> {item.title}</span>
         </li>
     



    ))}
          { /*   <tr>
                <th>ID</th>
                <td>{item.id}</td>
              </tr>
              <tr>
                <th>Título</th>
                <td>{item.title}</td>
              </tr>
              <tr>
                <th>Precio</th>
                <td>${item.price}</td>
              </tr>
              <tr>
                <th>Descripción</th>
                <td>{item.description}</td>
              </tr>
              <tr>
                <th>Categoría</th>
                <td>{item.category}</td>
              </tr>
              <tr>
                <th>Imágenes</th>
                <td>
                  <div className="d-flex flex-wrap">
                    {item.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className="img-thumbnail m-1"
                        style={{ width: '50px', height: '50px' }}
                      />
                    ))}
                  </div>
                </td>
              </tr>
              */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
