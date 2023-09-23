
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from '../src/components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
      <>
        <CartProvider>
          <BrowserRouter >
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer Saludo = {'Todos Los Productos'} />}/>
              <Route path="/category/:categoryId" element={<ItemListContainer Saludo = {'Categoria de los Productos'} />}/>
              <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 Something is going wrong...</h1>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </>
    </>
  )
}

export default App
