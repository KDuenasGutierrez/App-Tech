
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer Saludo = {'Todos Los Productos'} />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer Saludo = {'Categoria de los Productos'} />}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
