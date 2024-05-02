import React from 'react';
import useFetchProductsDetails from '../Hooks/useFetchProductsDetails';

// import fetchProductDetails from '../Hooks/useFetchProductsDetails';


const ProductDetails: React.FC = () => {
  
  // const { products } = fetchProductDetails();

  

  // const [product, setProduct] = useState<Product>({})


  // useEffect(() => {

  //   fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
  //   .then(response => response.json())
  //   .then(response => setProduct(response))

  // }, [productId])

  const {product} = useFetchProductsDetails();
  


  return (
    <div className="container mt-4">
      <h2>Detalles del Producto</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
            <div>{product.id}</div>
            <div>{product.title}</div>
         
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
