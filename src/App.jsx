
import './App.css'
import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [cart, setCart] = useState ([])

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)) {
      setCart(prev => [...prev , productToAdd ])
    } else {
      Toastify({

        text: 'El producto ya esta arreglado',

        className: "toast-alert",
        
        duration: 3000
        
        }).showToast();
    }
  }


  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }



  return (
    <>
      <div>
        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer Saludo = {'Todos Los Productos'} />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer Saludo = {'Categoria de los Productos'} />}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer addItem={addItem}/>}/>
            <Route path='*' element={<h1>404 Something is going wrong...</h1>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
