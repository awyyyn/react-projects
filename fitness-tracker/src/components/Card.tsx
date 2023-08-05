import { Link } from 'react-router-dom';
import placeholderImg from '../assets/images/placeholder.png'
import { exercise } from '../utils/type';

const Card = (exercise: exercise) => {

    const img = exercise.gifUrl ? exercise.gifUrl : placeholderImg

    return (
        <Link to={`/exercise/${exercise.id}`}>
            <div className='max-w-[220px] shadow-lg rounded-lg hover:shadow-2xl transition-all max-h-min'> 
                <img src={img} className='border-b-2 border-primary' />
                <div className='p-5 space-y-3'> 
                    <div className='flex flex-wrap justify-between'>
                        <p>Equipment</p>
                        <span className='px-4 py-1 text-sm capitalize bg-primary text-white rounded-full'>
                            {exercise.equipment}
                        </span> 
                    </div>
                    <h3 className='text-xl font-bold capitalize'>{exercise.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card