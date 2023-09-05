import {useNavigate} from "react-router-dom"

const Item = ({id,name, img, price}) => {
    const navigate = useNavigate()

    return (
            <div>
                <h3>{name}</h3>
                <img className="imagenes" src={img} alt="Imagen del producto"/>
                <h3>{price}</h3>
                <button onClick={() => navigate(`/detail/${id}`)}>Ver</button>
            </div>
    )
}

export default Item