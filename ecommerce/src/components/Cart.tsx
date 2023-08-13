'use client';

import { ShoppingContext } from "@/app/context/StoreContext";
import client from "@/lib/sanityClient";
import Image from "next/image";
import { useContext } from "react";
import { FiChevronRight } from 'react-icons/fi'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineMinus } from 'react-icons/ai' 
import getStripe from "@/lib/stripe";
import { cartItem } from "@/lib/types";
import { useAuth } from "@clerk/nextjs";
// import { loadStripe } from "@stripe/stripe-js";


 

const Cart = () => {

    const { userId } = useAuth(); 
    const { shopContext, setShopContext } = useContext(ShoppingContext);
    

    const handleRemove = async(id: string, price: number, quantity: number) => {  
        client.delete(id)
            .then((res) => { 
                setShopContext(prev => ({
                    ...prev,
                    cartItems: prev.cartItems.filter(item => item._id != id),
                    totalPrice: prev.totalPrice - (price * quantity)
                }))
            })
            .catch(err => console.error(err)) 
    }
 

    const handleMinusQuantity = (id: string, quantity: number) => {

        client.patch(id).set({quantity: quantity - 1}).commit().then((data) => {
            setShopContext(prev => ({
                ...prev,
                cartItems: prev.cartItems.map(item => item._id == id ? {...item, quantity: data.quantity} : item),
                totalPrice: prev.totalPrice - data.price
            })) 
        }).catch(err => console.log(err))
        // const item = shopContext.cartItems.filter(item => item._id == id);
        // if(item[0].quantity <= 1) return
        // const oldItems = shopContext.cartItems.filter(item => item._id != id);
        // const updatedItems = [...oldItems , {...item[0], quantity: item[0]?.quantity - 1}] 
        // setShopContext(prev => ({
        //     ...prev,
        //     cartItems:  updatedItems,
        //     totalPrice: shopContext.totalPrice - item[0].price
        // }))
    }   

    const handleAddQuantity = (id: string, quantity: number) => {
        client.patch(id).set({quantity: quantity + 1}).commit().then((data) => {
            setShopContext(prev => ({
                ...prev,
                cartItems: prev.cartItems.map(item => item._id == id ? {...item, quantity: data.quantity} : item),
                totalPrice: prev.totalPrice + (data.price * quantity)
            })) 
        }).catch(err => console.log(err))
        // const item = shopContext.cartItems.filter(item => item._id == id); 
        // const oldItems = shopContext.cartItems.filter(item => item._id != id);
        // const updatedItems = [{...item[0], quantity: item[0]?.quantity + 1}, ...oldItems] 
        // setShopContext(prev => ({
        //     ...prev,
        //     cartItems:  updatedItems,
        //     totalPrice: shopContext.totalPrice + item[0].price
        // }))  
    }   
    

    return (
        <aside className={`${shopContext.showCart ? 'translate-x-0' : 'translate-x-full'} transition-all py-3 px-5 bg-slate-100  duration-700 fixed right-0 z-[99] w-[325px] md:w-[425px] min-h-[600px] h-screen drop-shadow(-10px_0px_10px_5px_#00000030)`}>
            <header className="flex gap-x-3 items-center">
                <button className="hover:bg-slate-200 p-2 text-lg rounded-full " onClick={() => setShopContext({...shopContext, showCart: false})}>
                    <FiChevronRight />
                </button>
                <h3 className="font-bold">Your Cart</h3>
                <span className="text-red">
                    ( {shopContext.cartItems.length} item{shopContext.cartItems.length > 1 && "s"})
                </span>
            </header>
            <section className=" h-[85%] py-4 "> 
                <div className="overflow-y-scroll h-full flex flex-col gap-y-5 ">
                    {shopContext.cartItems.length > 0 ?
                        shopContext.cartItems.map((item: cartItem) => (
                            <div key={item._id} className="flex justify-evenly gap-x-3 md:gap-x-5">
                                <div className="w-[80px] md:w-[100px] md:h-[100px] h-[80px] relative object-contain rounded-lg bg-slate-200">
                                    <Image src={item.productImage} fill className="absolute h-full w-full" alt={`${item.productName}`}  />
                                </div>
                                <div className="flex flex-col px-2  justify-evenly">
                                    <div className="flex  justify-between ">
                                        <h1 className="max-w-[110px] w-[110px] text-left md:max-w-[140px] md:w-[140px] md:text-lg ">{item.productName}</h1>
                                        <h2 className="font-semibold md:text-xl min-w-[60px] w-[60px] max-w-[60px] text-right md:min-w-[100px] ">${item.price * item.quantity}</h2>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="flex bg-slate-100 mt-2 max-w-min border border-gray" >
                                            <button className="group disabled:text-gray  p-1 border-r border-gray group disabled:cursor-not-allowed" onClick={() => handleMinusQuantity(item._id, item.quantity)} disabled={item.quantity < 2 ? true : false} >
                                                <p className="group-disabled:group-active:scale-100 group-active:scale-75  transition-all "> 
                                                    <AiOutlineMinus />
                                                </p>
                                            </button>
                                            <p className="max-w-[80px] w-[30px]  text-center ">
                                                {item.quantity}
                                            </p> 
                                            <button onClick={() => handleAddQuantity(item._id, item.quantity)} className="group disabled:text-gray  p-1 border-l border-gray group disabled:cursor-not-allowed"  >        
                                                <p className="group-disabled:group-active:scale-100 group-active:scale-75  transition-all  ">
                                                    <IoIosAdd />
                                                </p>
                                            </button>
                                        </div>
                                        <button className="border border-red text-red px-1  py-0.5 text-sm  " onClick={() => handleRemove(item._id, item.price, item.quantity)}>
                                            Remove
                                        </button>
                                    </div>
                                </div> 
                            </div>
                        ))
                        : null
                    } 
                </div>
            </section>
            <footer>
                <div className="px-4 space-y-2">
                    <div className="flex justify-between">
                        <h2>Subtotal</h2>
                        <h2 className="text-lg font-bold">$ {shopContext.totalPrice}</h2>
                    </div>
                    <button 
                        onClick={async() => { 
                            const stripe = await getStripe();
                            const response = await fetch('/api/stripe', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({cartItems: shopContext.cartItems})
                            })
                            
                            if(response.status == 500 ) return
                            const data = await response.json(); 

                            
                             
                            stripe?.redirectToCheckout({sessionId: data.id})
                        }}
                        disabled={shopContext.totalPrice ? false : true} className="uppercase w-full py-2 rounded-lg disabled:cursor-not-allowed hover:shadow-xl disabled:bg-rose-900 text-white text-center bg-red">
                        Pay with Stripe
                    </button>
                </div>
            </footer>
        </aside>
    )
}

export default Cart