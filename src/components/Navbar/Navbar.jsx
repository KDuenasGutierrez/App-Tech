import {useNavigate} from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <h1>EcomTech</h1>
            <section>
                <button onClick={() => navigate(`/`)}>
                    Inicio
                </button>
                <button onClick={() => navigate(`/category/tablet`)}>
                    Tablets
                </button>
                <button onClick={() => navigate(`/category/notebook`)}>
                    Notebooks
                </button>
                <button onClick={() => navigate(`/category/celular`)}>
                    Phones
                </button>
                <button onClick={() => navigate(`/category/smartwatch`)}>
                    Smart Watch
                </button>
            </section>
            <CartWidget />



        </nav>
    )
}

export default Navbar