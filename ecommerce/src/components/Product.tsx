import { product } from '@/lib/types'
import Link from 'next/link'
import { imgUrlFor } from '../lib/sanityClient'
import Image from 'next/image'

const Product = ({product}: { product: product}) => {
  
    return (
        <div className='shadow-lg hover:shadow-2xl min-w-[200px] group cursor-pointer relative rounded-xl transition-all overflow-hidden'>
            <Link href={`/product/${product.slug.current}`} >
                <div className='relative bg-slate-200 rounded-xl max-h-[250px]  w-full overflow-hidden'>
                    <Image 
                        src={imgUrlFor(product.image[0]).url()} 
                        width={200}  
                        height={200} 
                        className='group-hover:scale-110 transition-all duration-500'
                        alt={`${product.slug}`}  
                    />
                </div>
                <div className='px-3 py-2'>
                    <p className=' text-gray'>{product.name}</p>
                    <p className='font-semibold'>${product.price}</p>
                </div>
            </Link> 
        </div> 
    )
}

export default Product
