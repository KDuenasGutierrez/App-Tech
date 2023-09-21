import {useNavigate} from "react-router-dom"

const Item = ({id,name, img, price}) => {
    const navigate = useNavigate()

    return (
            <div className="listado">
                <div className="card">
                <img className="card-img-top" src={img} alt="Imagen del producto"/>
                <div className="card-body">
                    <h3 className="card-title titulo">{name}</h3>
                    <h4 className="card-text precio">{price}</h4>
                    <button className="btn btn-secondary" onClick={() => navigate(`/detail/${id}`)}>Description</button>
                </div>
                </div>
            </div>
    )
}

export default Item