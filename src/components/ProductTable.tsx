import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import useFetchProducts from '../Hooks/useFetchProducts';
import ProductDelete from './ProductDelete';



const ProductTable = () => {
  const { products, loading, error } = useFetchProducts();


  const [currentPage, setCurrentPage] = useState(0); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const itemsPerPage = 5; 

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filtrar productos 
  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0); 
  };



  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <div className="input-group mb-3">
        <Link to="/add" className="btn btn-success mb-3">Agregar Producto</Link>
        <input
          type="text"
          className="form-control input-sm"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Imágenes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
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
                    <Link to={`/product/${product.id}`} className="btn btn-primary">Ver</Link>
                    <Link to={`/edit/${product.id}`} className="btn btn-info">Editar</Link>
                    {product && <ProductDelete productId={product.id} />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel="Anterior"
        nextLabel="Siguiente"
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default ProductTable;
