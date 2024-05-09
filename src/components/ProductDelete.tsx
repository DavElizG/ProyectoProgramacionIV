import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { getProductsById, productDelete } from '../services/ProductService';
import axios from 'axios';

interface ProductDeleteProps {
  productId: string; // Asumiendo que el ID del producto es un string
}

const ProductDelete: React.FC<ProductDeleteProps> = ({ productId }) => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
 

  const handleDelete = async () => {
    try {
      console.log('Eliminando producto con ID:', productId);
    
      await productDelete(productId);
      setShowModal(false); 
      window.location.reload(); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div>
      <button onClick={() => setShowModal(true)} className="btn btn-danger">
        Eliminar 
      </button>

      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductDelete;
