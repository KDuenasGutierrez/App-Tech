import { useState } from "react";

const ItemCount = ({stock, initial= 1, onAdd}) => {
    const [count, setCount] = useState(initial)

    let aumentar = () => {
        if (count <= stock) {
            setCount(count + 1)
        }
    }

    let disminuir = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h5>{count}</h5>
            <button onClick={disminuir}>-</button>
            <button onClick={()=> onAdd(count)}>Agregar a la Cesta</button>
            <button onClick={aumentar}>+</button>
        </div>
    )
}
export default ItemCount;