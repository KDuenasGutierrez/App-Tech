import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({ Saludo }) => {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        getProducts()
            .then(res => {
                setProductos(res)
            })
            .catch(error =>{
                console.error (error)
            })
    }) 

    return(
        <div>
            <h1>{Saludo}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer