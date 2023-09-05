import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({category, name, img, price, stock, description  }) => {

    const [quantity, setquantity] = useState(0)

    const handleOnAdd = (cantidad) => {

            Toastify({

                text: 'Se agregaron los productos al carrito',
                
                duration: 3000
                
                }).showToast();

            setquantity(cantidad)
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <img className="imagenes detalle" src={img} alt={name} />
            <h2>{price}</h2>
            <h3>En stock {stock}</h3>
            <p className="descripcion">{description} </p>
            {
                quantity == 0 ? (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    ) : (
                        <button> Finalizar Compra </button>
                    )
            }
        </div>
    )
} 
export default ItemDetail