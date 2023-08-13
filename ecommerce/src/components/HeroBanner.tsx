

import Link from 'next/link'
import Image from 'next/image'; 
import { banner } from '@/lib/types';
import { imgUrlFor } from '../lib/sanityClient'

const HeroBanner = ({banner}: {banner: banner }) => {
 

    return (
        <div className='min-h-[400px] sm:px-10 md:px-20'>
            <div className='grid relative h-[400px] bg-slate-200 px-5 sm:px-6 md:px-8 pt-10 pb-4 w-[98%] rounded-xl mx-auto'>
                <div className='self-center'>
                    <p className='text-gray'>{banner.smallText}</p>
                    <h3 className='text-4xl  sm:text-5xl z-[2] relative md:text-5x font-bold text-start'>{banner.largeText2}</h3>
                    <h1 className='text-9xl drop-shadow-xl  z-[3] text-white font-extrabold'>{banner.largeText}</h1>
                </div>
                <Image 
                    src={imgUrlFor(banner.image).url()} 
                    alt='image' 
                    width={400} 
                    height={350}  
                    priority 
                    className='absolute min-h-[300px] z-[1] min-w-[350px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
                />
                <Link href={'/'} className='z-[90]' >
                    <button type='button' className='bg-red text-white px-4 py-2 rounded-lg mt-2'>
                        {banner.buttonText}
                    </button>        
                </Link> 
                
                <div className=' justify-self-end self-end '>
                    <h5>Description</h5> 
                    <p className='text-gray'>{banner.desc}</p>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
