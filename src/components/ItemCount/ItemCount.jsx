import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)

    return (
        <div>
            <h5>1</h5>
            <button>-</button>
            <button onClick={()=> onAdd(count)}>Agregar a la Cesta</button>
            <button>+</button>
        </div>
    )
}
export default ItemCount;