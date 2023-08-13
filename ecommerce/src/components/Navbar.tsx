 
import { UserButton } from '@clerk/nextjs'
import CartButton from './CartButtton'
import Link from 'next/link'

const Navbar = () => {

    return (
        <div className={``}>
            <nav className='px-5 shadow-md sm:px-16 md:px-28 py-2  w-full flex z-50 justify-between'>
                <Link href={'/'}>
                    <h3 className='text-xl font-extrabold drop-shadow-lg text-slate-500'>La Store</h3>
                </Link>
                <div className='flex gap-x-4'>
                    <CartButton /> 
                    <UserButton />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
