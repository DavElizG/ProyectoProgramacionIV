import { ReactNode, createContext, useState } from 'react';
import MyContext from './MyContext';

interface MyContextType {
  productId: number;
  setProductId: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const contextValue: MyContextType = {
    productId: 0, // Aquí puedes inicializar productId como lo necesites
    setProductId: () => {}, // Aquí puedes inicializar setProductId como lo necesites
    pageNumber,
    setPageNumber
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default ProductsProvider;
