import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)

    return (
        <div>
            <h5>{count}</h5>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
            <button onClick={()=> onAdd(count)}>Agregar a la Cesta</button>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
    )
}
export default ItemCount;