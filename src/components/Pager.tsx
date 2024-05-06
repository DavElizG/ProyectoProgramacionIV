import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Pager = () => {
  const { setPageNumber } = useContext(ProductContext);

  // Generar dinámicamente el array de páginas en lugar de tenerlo estático
  const totalPages = 10;
  const pages = Array.from({ length: totalPages }, (_, index) => index);

  const handleChangePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  return (
    <div className="pager">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleChangePage(pageNumber)}
        >
          {pageNumber + 1}
        </button>
      ))}
    </div>
  );
};

export default Pager;

