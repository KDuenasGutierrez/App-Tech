import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

/* -------------------------------------------------------------------------- */
/*             COMO ES UNA PETICION ASINCRONA SE UTILIZA USEEFFECT            */
/* -------------------------------------------------------------------------- */

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState(null)

    const {productId} = useParams()

    useEffect(() =>{
        getProductById(productId)
        .then(res => {
            setProductos(res)
        })
        .catch(error =>{
            console.error (error)
        })
    },[productId])

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...productos} />
        </div>
    )
}
export default ItemDetailContainer