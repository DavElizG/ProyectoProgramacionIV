
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTable from './components/ProductTable'
import ProductDetails from './components/ProductsDetails'
import ProductAdd from './components/ProductAdd'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" Component={ProductTable} />
          <Route path="/product/:id" Component={ProductDetails} />
          <Route path="/add" Component={ProductAdd} />
          

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
