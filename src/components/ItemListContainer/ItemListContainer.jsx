import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import { getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'


const ItemListContainer = ({ Saludo }) => {

    const { categoryId } = useParams()

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState (true)

    useEffect( () => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction (categoryId)
            .then(res => {
                setProductos(res)
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
            <div class="d-flex justify-content-center">
                <div id="loadingSpinner" class="spinner-grow text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
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