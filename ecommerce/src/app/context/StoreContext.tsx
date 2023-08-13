'use client';
import client from "@/lib/sanityClient";
import { cartItem, product } from "@/lib/types";
import { useAuth } from "@clerk/nextjs";
import React, { useState, createContext, Dispatch, useEffect } from "react";

interface shopContext { 
    showCart: boolean
    cartItems: cartItem[]  
    totalPrice: number
    totalQuantities: number 
    toast: string,
    showToast: boolean
    toastVariant: 'success' | 'error'
} 
 
interface ShopContext {
    shopContext: shopContext
    setShopContext: React.Dispatch<React.SetStateAction<shopContext>>
}

const createContextInitialValue: ShopContext = {
    shopContext: {
        showCart: false,
        cartItems: [],
        totalPrice: 0,
        totalQuantities: 0,
        showToast: false,
        toast: '',
        toastVariant: "success"
    },
    setShopContext: () => null
}

export const ShoppingContext = createContext<ShopContext>(createContextInitialValue);

const StoreContext = ({children}: { children: React.ReactNode}) => {  

    const { userId } = useAuth()
    const [shopContext, setShopContext] = useState<shopContext>(createContextInitialValue.shopContext);
 
    useEffect(() => {   
         
        const initialData = async() => {
            const query = `*[_type == "cart" && userId == "${userId}"]`;
            let price = 0;
            const data = await client.fetch(query);
            
            for(let i = 0; i < data.length; i++) {
                price += data[i].price * data[i].quantity;
            }

            setShopContext(prev => ({
                ...prev,
                cartItems: data, 
                totalQuantities: data.length,
                totalPrice: price
            }))
        }

        initialData(); 
    }, [])

    // useEffect(() => { 

    //         const subscription = client.listen(query).subscribe((update => { 
    //             console.log(update.transition);
    //             // if(update.transition == "disappear"){ 
    //             //     setShopContext((prev) => ({
    //             //         ...prev,
    //             //         cartItems: prev.cartItems.filter(item => item._id != update.documentId),
    //             //         totalPrice: prev.totalPrice, 
    //             //     }))
    //             // }
    //             if(update.transition == "appear"){
                            
    //             }  
    //         })); 

    //         return () => subscription.unsubscribe();

    // }, [])
 
    
    console.log("cartItem", shopContext.cartItems)

    return (
        <ShoppingContext.Provider value={{shopContext, setShopContext, }}>
            {children}
        </ShoppingContext.Provider>
    )
}
export default StoreContext
