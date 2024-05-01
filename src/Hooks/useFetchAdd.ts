import { useContext } from 'react';
import MyContext from '../context/MyContext';


const useFetchAdd = async (newProduct: Product) => {
  const { setProductId, setPageNumber } = useContext(MyContext);

  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error('Error al agregar el producto');
    }
    const data = await response.json();
    setProductId(data.id);
    console.log('Producto agregado exitosamente:', data);
    return data;
  } catch (error) {
    console.error('Error al agregar el producto:', error.message);
    throw new Error(error.message);
  }
};

export default useFetchAdd;
