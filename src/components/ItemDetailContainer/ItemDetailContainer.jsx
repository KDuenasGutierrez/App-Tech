import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

/* -------------------------------------------------------------------------- */
/*             COMO ES UNA PETICION ASINCRONA SE UTILIZA USEEFFECT            */
/* -------------------------------------------------------------------------- */

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState(null)

    useEffect(() =>{
        getProductById('1')
        .then(res => {
            setProductos(res)
        })
        .catch(error =>{
            console.error (error)
        })
    })

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...productos} />
        </div>
    )
}
export default ItemDetailContainer