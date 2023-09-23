import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import {db} from '../../services/firebase/firebaseConfig'
import{getDoc, doc} from 'firebase/firestore'

/* -------------------------------------------------------------------------- */
/*             COMO ES UNA PETICION ASINCRONA SE UTILIZA USEEFFECT            */
/* -------------------------------------------------------------------------- */

const ItemDetailContainer = ({addItem}) => {

    const [productos, setProductos] = useState(null)

    const {productId} = useParams()

    const [loading, setLoading] = useState (true)

    useEffect(() =>{

        setLoading(true)

        const productsRef = doc(db, 'products', productId)

        getDoc(productsRef)
        .then((documentSnapshot)=>{
            const fields = documentSnapshot.data()
            const productsAdapted = {id: documentSnapshot.id, ...fields}
            setProductos(productsAdapted)
        })
        .catch(error =>{
            console.error (error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[productId])

    if (loading) {
        return(
            <div className="d-flex justify-content-center">
                <div  id="loadingSpinner" className="spinner-grow text-danger" role="status">
                    <h2 className="">...Loading Products...</h2>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...productos} addItem={addItem} />
        </div>
    )
}
export default ItemDetailContainer