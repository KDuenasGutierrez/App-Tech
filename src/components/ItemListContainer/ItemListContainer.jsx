import { useEffect, useState } from "react"
import {db} from '../../services/firebase/firebaseConfig'
import{getDocs, collection, query, where} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'



const ItemListContainer = ({ Saludo }) => {

    const { categoryId } = useParams()

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState (true)

    useEffect(() => {

        setLoading(true)

        const productsRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where ('category', '==', categoryId))



        getDocs(productsRef)
            .then((querySnapshot)=>{
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()

                    return {id: doc.id, ...fields}
                })
                setProductos(productsAdapted)
            })
            .catch(error =>{
                console.error (error)
            })
            .finally(()=>{
                setLoading(false)
            })

    },[categoryId])

    if (loading) {
        return(
            <div className="d-flex justify-content-center">
                <div id="loadingSpinner" className="spinner-grow text-danger" role="status">
                </div>
                <div>
                <h2 className="">...Loading Products...</h2>
                </div>
            </div>
        )
    }

    return(
        <div>
            <h1>{Saludo}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer