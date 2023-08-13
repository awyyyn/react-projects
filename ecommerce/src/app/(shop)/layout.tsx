import { Cart, Footer, Navbar } from '@/components'
import { SignedIn } from '@clerk/nextjs'
import React from 'react'

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='overflow-x-hidden min-h-[600px] h-screen overflow-y-scroll   relative'>
            <Cart />
            <SignedIn> 
                <Navbar />
            </SignedIn>
            <main className='pt-4'>
                {children} 
            </main>
            <SignedIn> 
                <Footer /> 
            </SignedIn>
        </div>
    )
}

export default layout