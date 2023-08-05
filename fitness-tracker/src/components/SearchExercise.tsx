import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getByBodyParts } from '../utils/api';
import { exercise } from '../utils/type'; 
import Card from './Card';
import SearchNotFound from './SearchNotFound';


const SearchExercise = () => {

    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState<exercise[]>([])
    const [loading, setLoading] = useState(false) 
    const categories = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
    const [selectedCategory, setSelectedCategory] = useState(''); 
    const [filtered, setFiltered] = useState<exercise[]>(exercises)
 
 

    useEffect(() => {
        async function getData() { 
            setLoading(true)
            const data = await getByBodyParts(selectedCategory); 
            setExercises(data);
            setFiltered(data);
            setLoading(false)
        }
        
        getData(); 

    }, [selectedCategory]);
 
    useEffect(() => {
        setFiltered(exercises?.filter(exercise => exercise.name.toLowerCase().includes(search.toLowerCase())));
    }, [search])
 
    console.log(filtered)
  
    // if(loading) return "LOADING..."
 

    const varaint = {
        initial: {
            opacity: 0,
            translateY: 50 
        },
        whileInView: { 
            opacity: [0.5, 1],
            translateY: 0,
            transition: { 
                duration: 1.2,
            }
        } 
    }
 
    return (
        <section className="mt-16 pb-5 space-y-10 overflow-hidden" id='explore-exercise'>
            <motion.h1 
                variants={varaint}
                initial="initial"
                whileInView="whileInView"
                viewport={{once: true}}
                className=" text-4xl lg:text-5xl px-10 md:px-0 sm:max-w-[450px] lg:max-w-[600px] text-center mx-auto"    
            >
                Awesome Exercises you Should Know
            </motion.h1>
            <motion.div 
            initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.2,
                    delay: 0.3
                }}
                className="flex  mx-auto shadow-xl sm:max-w-[600px] lg:max-w-[900px] text-base md:text-2xl "
            >
                <input 
                    className="lg:w-[90%] w-[80%] py-2 peer focus:shadow-lg pl-4 focus:outline-none"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="text-white peer-focus:shadow-xl w-[20%] lg:w-[10%] bg-primary">
                    Search
                </button>
            </motion.div>
            <div 
                
                draggable className='max-w-full py-5 flex gap-x-5 mx-10 sm:mx-16 lg:mx-48 overflow-x-scroll  snap-x'>
                {categories?.map((category, i) => (
                    <label key={i} htmlFor={category}
                    className={`${category == selectedCategory ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'} snap-center min-w-max cursor-pointer border-primary border shadow-sm px-6 py-2 `}
                    >
                        <input 
                            id={category}
                            onClick={() => setSelectedCategory(category)}
                            type='radio'
                            name='category'     
                            value={category.toLowerCase()}
                            className='hidden'
                        />
                        <p className='capitalize'>{category}</p>
                    </label>
                ))}
            </div> 
            <div    
                
                className='flex flex-wrap px-10 sm:px-16 min-h-[400px] lg:px-48 flex-1 justify-evenly gap-y-10 gap-x-20'>
                {!selectedCategory ?  
                    <SearchNotFound>
                        Select a Category
                    </SearchNotFound>
                : filtered.length < 1 ?  
                    <SearchNotFound isLoading={loading}>
                        No "<span className='font-bold'>{ search }</span>" found in the "<span className='font-semibold'>{ selectedCategory }</span>" list's.
                    </SearchNotFound> : 
                    filtered?.map(exercise => (
                        <Card key={exercise.id} {...exercise} />
                    ))
                }
            </div>
        </section>
    )
}

export default SearchExercise