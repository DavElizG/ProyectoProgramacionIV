
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable'
import ProductDetails from './components/ProductsDetails'
import ProductAdd from './components/ProductAdd'
import ProductDelete from './components/ProductDelete';

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" Component={ProductTable} />

          <Route path="/product/:productId" Component={ProductDetails} />
          <Route path="/product/:id" Component={ProductDetails} />
          <Route path="/add" Component={ProductAdd} />
          <Route path="/delete" Component={ProductDelete} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



