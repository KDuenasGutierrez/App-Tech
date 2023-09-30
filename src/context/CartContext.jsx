import {useState, createContext, useContext} from 'react'

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState ([])

    const addItem = (prodToAdd) => {
    if(!isInCart(prodToAdd.id)) {
        setCart(prev => [...prev , prodToAdd ])
    } 
        else {
            Toastify({
            text: 'El producto ya se encuentra agregado',
            className: "toast-alert",         
            duration: 3000         
            }).showToast();
        }
    }
        const isInCart = (id) => {

        return cart.some(prod => prod.id === id)
        }

        const getTotalQ = () => {
            let totalQuantity = 0

            cart.forEach(prod =>{
                totalQuantity += prod.quantity
                })

            return totalQuantity
        }

        const totalQuantity = getTotalQ()

        const getTotalP = () => {
            let totalPrice = 0

            cart.forEach(prod =>{
                totalPrice += prod.quantity * prod.price
                })

            return totalPrice
        }

        const totalPrice = getTotalP()

        const removeItem = (id) => {
            setCart(prev => prev.filter(prod => prod.id !== id))
        }

        const clean = () => {
            setCart([])
        }


    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, totalPrice, removeItem, clean}}>
            {children}
        </CartContext.Provider>
    )
}

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}