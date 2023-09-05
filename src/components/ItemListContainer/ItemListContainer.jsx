import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import { getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'


const ItemListContainer = ({ Saludo }) => {

    const { categoryId } = useParams()

    const [productos, setProductos] = useState([])

    useEffect( () => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction (categoryId)
            .then(res => {
                setProductos(res)
            })
            .catch(error =>{
                console.error (error)
            })
    },[categoryId]) 

    return(
        <div>
            <h1>{Saludo}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer