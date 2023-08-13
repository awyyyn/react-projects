'use client';

import React from "react";
import StoreContext from "./context/StoreContext";


const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <StoreContext>
            {children}
        </StoreContext>
    )
}

export default Providers
