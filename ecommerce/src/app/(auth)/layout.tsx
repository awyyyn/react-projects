import { SignedOut } from '@clerk/nextjs'
import React from 'react'

export default function layout({children} : {children: React.ReactNode}) {
    
    return (
        <SignedOut>
            <div className="min-h-[600px] h-screen w-screen grid place-content-center">
                {children}
            </div>
        </SignedOut>
    )
}
