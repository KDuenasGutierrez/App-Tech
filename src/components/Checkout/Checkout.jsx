/* eslint-disable no-undef */
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useForm } from "react-hook-form"
import {addDoc, collection, query, where, writeBatch, documentId, getDocs} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const {cart, totalPrice, clean} = useCart ()
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate ()
    const createOrder = async (data) => {
        try{
            setLoading(true)

            const order = {
                buyer: {name:data.Name,
                        lastname:data.LastName,
                        email:data.Email,
                        phone:data.Phone,
                        address:data.Address
                },
                items:cart,
                totalPrice
            }
            const ids = cart.map(prod => prod.id)
            const batch = writeBatch(db);
            const outOfStock = []
            const productRef = query(collection(db, 'products'), where(documentId(),'in',ids))
            const {docs} = await getDocs(productRef)
            docs.forEach(doc =>{
                const fields = doc.data()
                const stockDb = fields.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref,{stock: stockDb - prodQuantity})
                }
                else{
                    outOfStock.push({id:doc.id, ...fields})
                    console.log(outOfStock)
                }
            })
            if(outOfStock.length === 0){
                const ordersColletion = collection(db, "orders");
                const {id:orderID} = await addDoc(ordersColletion, order);
                batch.commit()
                clean()
                swal({
                    title: "Thanks You!",
                    text: 'el numero de orden es: '+ orderID,
                    icon: "success",
                    button: "OK",
                });
                setTimeout(()=>{navigate('/')},4000)
            } else {
                for (const producto of outOfStock) {
                    swal({
                        title: "We Sorry!",
                        text: `Hay Productos Fuera de Stock: 
                                el producto ${producto.name},
                                tiene un stock actual de ${producto.stock}.`,
                        icon: "error",
                        button: "OK",
                    });
                }
            }
        }
        catch (error) {
            swal({
                title: "We Sorry!",
                text: 'Ha habido Un Error',
                icon: "error",
                button: false,
            });
        }
        finally{
            setLoading(false)
        }
    }

    if(loading){
        return(
            <div className="d-flex justify-content-center">
                <div  id="loadingSpinner" className="spinner-grow text-danger" role="status">
                </div>
                <div>
                <h2 className="">...Loading Your Order...</h2>
                </div>
            </div>
        )
    }


    return (
        <>
        <h1>Check-Out</h1>
            <div className="formulario">
                <div className="box">
                    <span className="borderLine"></span>
                    <form onSubmit={handleSubmit(createOrder)}>
                        <h2>Data</h2>
                        <div className="inputBox">
                            <label>Nombre/Name</label>
                            <input type="text" {...register('Name',{required:true})}/>
                            {errors.Name?.type === 'required' && <p className="advert">Rellene el Campo</p>}
                        </div>
                        <div className="inputBox">
                            <label>Apellido/LastName</label>
                            <input type="text" {...register('LastName',{required:true})}/>
                            {errors.LastName?.type === 'required' && <p className="advert">Rellene el Campo</p>}
                        </div>
                        <div className="inputBox">
                            <label>Correo/Email</label>
                            <input type="email" {...register('Email',{pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})}/>
                            {errors.Email?.type === 'pattern' && <p className="advert">Revisa el Formato del Email</p>}
                        </div>
                        <div className="inputBox">
                            <label>Celular/Phone</label>
                            <input type="number" {...register('Phone')}/>
                        </div>
                        <div className="inputBox">
                            <label>Dirección/Address</label>
                            <input type="text" {...register('Address')}/>
                        </div>
                        <input className='btn btn-success' type="submit" value="Request Order" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout