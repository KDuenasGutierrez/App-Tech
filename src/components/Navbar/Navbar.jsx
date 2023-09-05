import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <h1 onClick={() => navigate(`/`)}>EcomTech</h1>
            <section>
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
        </nav>
    )
}

export default Navbar