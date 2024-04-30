import React from 'react'

//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext({
    productId: 0,
    setProductId: (id: number) => {},
    pageNumber: 0,
    setPageNumber: (value: number) => { }
});

export default ProductsContext;