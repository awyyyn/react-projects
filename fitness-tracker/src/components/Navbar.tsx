
import logo from '../assets/images/Logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const pathname = useLocation()
 
    
    return (
        <nav className="shadow-lg px-10 sm:px-16 lg:px-48 py-4 flex items-center justify-between">
            <Link to={'/'}>
                <img src={logo} alt='fitness logo' />
            </Link>
            <div className='flex gap-x-10'>
                <NavLink to={'/'} className={({isActive, isPending}) =>  isPending ? "pending" : isActive ? 'active-link' : 'inactive-link'} >
                    Home
                </NavLink>
                <a href={'#explore-exercise'} className={`${pathname.pathname.includes('exercise') ? 'active-link' : 'inactive-link'} `} >
                    Exercise
                </a>
            </div>
        </nav>
    )
}

export default Navbar