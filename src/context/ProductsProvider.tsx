import { ReactNode, useState } from 'react';
import ProductsContext from './ProductsContext'


const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [productId, setProductId] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    
    return (
    <ProductsContext.Provider value={{productId, setProductId, pageNumber, setPageNumber}}>
        {children}
    </ProductsContext.Provider>


    )
}

export default ProductsProvider;




// ProductsProvider.tsx

