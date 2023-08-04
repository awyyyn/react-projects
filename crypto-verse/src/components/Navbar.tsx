import {  Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'; 
import { AiFillHome } from 'react-icons/ai'
import { BsCurrencyExchange, BsNewspaper } from 'react-icons/bs'
import logo from '../assets/cryptocurrency.png'
import { useAppSelector } from '../features/hooks';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi'  

const Navbar = () => { 
       
    const items = [
        {
            key: '/',
            icon: <AiFillHome />,
            label: <Link to={'/'}>Home</Link>, 
        },
        {
            key: '/exchanges',
            icon: <BsCurrencyExchange />,
            label: <Link to={'/exchanges'}>Exchanges</Link>
        },
        {
            key: '/cryptocurrencies',
            icon: <PiCurrencyCircleDollarFill />,
            label: <Link to={'/cryptocurrencies'}>Crypto Currencies</Link>
        },
        { 
            key: '/news',
            icon: <BsNewspaper />,
            label: <Link to={'/news'}>News</Link>,
        },
    ]

    const { isCollapse } = useAppSelector(state => state.sidebar)

    

    return (
        <nav className='nav__container'> 
            <div className='logo-container'>
                <Avatar
                    shape='circle'
                    src={logo}
                    size={isCollapse ? 'small' : 'large' }
                    alt='LOGO' 
                    
                />
                {
                    !isCollapse &&
                    <h1 style={{color: 'white'}}>
                        Crypto-verse
                    </h1>
                }
            </div>
            <Menu 
                className='menu'   
                items={items} 
                theme='dark'
                style={{
                    color: 'white'
                }}
            />
        </nav>
    )
}

export default Navbar