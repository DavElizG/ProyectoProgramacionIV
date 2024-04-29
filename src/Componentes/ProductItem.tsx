import React from 'react';
import { Product } from '../Context/Types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      {product.description && (
        <p>Description: {product.description}</p>
      )}
    </div>
  );
};

export default ProductItem;
