import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import CartWidget from '../CartWidget/CartWidget'
import { db } from "../../services/firebase/firebaseConfig"
import { getDocs, collection } from "firebase/firestore"

const Navbar = () => {
    const[categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const categoriesRef = collection(db,'categories')

        getDocs(categoriesRef)
            .then((querySnapshot)=>{
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()

                    return {id: doc.id, ...fields}
                })

                setCategories(categoriesAdapted)
            })
    },[])

    return (
        <nav>
            <h1>EcomTech</h1>
            <section>

                <button onClick={() => navigate(`/`)}>
                    Inicio
                </button>
                {
                    categories.map(categ => (
                        <button key={categ.id} onClick={() => navigate(`/category/${categ.slug}`)}>{categ.name}</button>
                    ))
                }
            </section>
            
            <CartWidget />



        </nav>
    )
}

export default Navbar