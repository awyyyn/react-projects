'use client'
import { ShoppingContext } from '@/app/context/StoreContext' 
import { useContext, useEffect, useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const CartButton = () => { 
    
    const { setShopContext, shopContext } = useContext(ShoppingContext); 
  

    const handleCart = () => {
        setShopContext({...shopContext, showCart: !shopContext.showCart})   
    }

    return (
        <button className='text-2xl hover:bg-slate-200 px-1 py-1  rounded-full relative' onClick={handleCart}>
            <AiOutlineShopping />
            {shopContext.cartItems.length > 0 ?
                <span className='absolute right-0 top-0 text-xs text-white bg-red font-bold  rounded-full px-[6px] py-[1px] '>
                    {shopContext.totalQuantities}
                </span> : null
            }
        </button>
    )
}

export default CartButton
