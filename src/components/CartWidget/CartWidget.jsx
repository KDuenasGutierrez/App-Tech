import cart from './assets/cart'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {

    const navigate = useNavigate() 

    const { totalQuantity } = useCart()

    return (
        <button onClick={() => navigate('/cart')} className='btn btn-light'>
            <img className='logo' src={cart}/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget