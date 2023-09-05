const ItemDetail = ({category, name, img, price, stock, description  }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <img className="imagenes detalle" src={img} alt={name} />
            <h2>{price}</h2>
            <h3>En stock {stock}</h3>
            <p className="descripcion">{description} </p>
        </div>
    )
} 
export default ItemDetail