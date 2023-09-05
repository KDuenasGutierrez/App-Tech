const Item = ({name, img, price}) => {
    return (
            <div>
                <h3>{name}</h3>
                <img src={img} alt="Imagen del producto"/>
                <h3>{price}</h3>
                <button>Ver</button>
            </div>
    )
}

export default Item