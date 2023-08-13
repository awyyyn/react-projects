'use client'

import { ShoppingContext } from '@/app/context/StoreContext'
import { useContext, useEffect } from 'react'
import { BsFillBagCheckFill } from 'react-icons/bs'


const Toast = () => {


    const { shopContext, setShopContext } = useContext(ShoppingContext);
  
    return (
        <div className={`${shopContext.showToast  ? ' translate-y-5 opacity-100' : 'opacity-0 translate-y-0'} flex transition-all text-sm sm:text-base px-5 py-1 fixed gap-x-3 bg-slate-100 items-center shadow-xl z-50 rounded-2xl top-10 right-10`}>
            <span className='text-green-600'>
                <BsFillBagCheckFill />
            </span>
            <p>
                {shopContext.toast}
            </p> 
        </div>
    )
}

export default Toast
