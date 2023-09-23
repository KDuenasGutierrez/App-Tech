import cart from './assets/cart.png'
import { useCart } from '../../context/CartContext'


const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <button className='btn btn-light'>
            <img className='logo' src={cart}/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget