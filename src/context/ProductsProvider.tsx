import { ReactNode, useState } from 'react';
import MyContext from './MyContext';

//COMPLETAR EL PROVIDER CON LO QUE NECESITE

const ProductsProvider = ({children}: {children: ReactNode}) => {
  const [productId, setProductId] = useState(0)
  const [pageNumber, setPageNumber] = useState(0)

  return (
    <MyContext.Provider value={{productId, setProductId, pageNumber, setPageNumber}}>
        {children}
    </MyContext.Provider>
  )
}

export default ProductsProvider;