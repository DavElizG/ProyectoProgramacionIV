import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

const Pager = () => {

    let pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const { setPageNumber } = useContext(ProductsContext);

    const handleChangePage = (value: number) => {
        console.log(value)
        setPageNumber(value);
    };

    return (
        <div className='pager'>
            {pages.map((item) => (
                <button
                    key={item}
                    onClick={() => handleChangePage(item)}>{item + 1}</button>
            ))}
        </div>
    )
}

export default Pager