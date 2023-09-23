import { useCart } from "../../context/CartContext"
import {useNavigate} from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, totalPrice, totalQuantity, clean } = useCart()

    const navigate = useNavigate()

    if (totalQuantity === 0) {
        return (
            <>
            <h1>Your shopping cart is empty</h1>
            <button className='btn btn-primary' onClick={() => navigate(`/`)}>
                    Go back products
            </button>
            </>
        )
    }

    return (
        <>
            <h1>Shopping</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <img className="card-img-top imagen" src={prod.img} alt="Imagen del producto"/>
                                <h1>{prod.name}</h1>
                                <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>
                                    ✖ Remove all items of this product
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <h2>Total: ${totalPrice}</h2>
            <button className='btn btn-light' onClick={() => clean()}>
                    ❌ Remove all Objects
            </button>
            <button className='btn btn-success' onClick={() => navigate('/checkout')}>
                    Go to Checkout
            </button>
        </>
    )
}

export default Cart