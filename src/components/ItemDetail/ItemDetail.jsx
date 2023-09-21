import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, category, name, img, price, stock, description, addItem }) => {

    const [quantity, setquantity] = useState(0)

    const ItemCountHere = ItemCount

    const handleOnAdd = (cantidad) => {

        const objAddToCart = {
            id, name, price, cantidad
        }

        addItem(objAddToCart)

            Toastify({

                text: 'Se agregaron los productos al carrito',
                
                duration: 3000
                
                }).showToast();

            setquantity(cantidad)
    }

    return (
        <div className="listado">
            <div className="card">
                <img className="card-img-top imagen" src={img} alt="Imagen del producto"/>
                    <div className="card-body">
                        <h3 className="card-title stock">{category}</h3>
                        <h3 className="card-title titulo">{name}</h3>
                        <h4 className="card-text stock">{stock}</h4>
                        <h4 className="card-text precio">{price}</h4>
                        <h5 className="card-text descripcion">{description}</h5>
                        {
                            quantity === 0 ? (
                                    <ItemCountHere stock={stock} onAdd={handleOnAdd}/>
                                ) : (
                                    <Link to='/cart' className='btn btn-success'>Finalizar Compra</Link>
                                )
                        }
                    </div>
            </div>
        </div>
    )
} 
export default ItemDetail