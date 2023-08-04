 
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Error = () => {
 

    return (
        <div className='error center'>
            <div className='error-content'>
                <h1>Error!</h1>
                <Link to={'/'}>
                    <button className="back-btn">
                        <IoMdArrowBack /> 
                        <span>Home</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Error