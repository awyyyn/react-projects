import { imgUrlFor } from "@/lib/sanityClient"
import { banner } from "@/lib/types"
import Image from 'next/image'
import Link from 'next/link'


const FooterBanner = ({banner}: {banner: banner}) => {
 

    return ( 
        <div className="w-full  sm:px-10 md:px-20 mb-10">
            <div className="flex flex-col md:flex-row px-5 sm:px-6 md:px-8 gap-y-72 relative  justify-between rounded-lg mt-20 mb-5 bg-red min-h-[200px] py-10 w-[98%]   mx-auto">
                <div className="md:self-center mb-2">
                    <p className="text-white">{banner.discount}</p>                    
                    <h3 className="text-4xl md:text-6xl text-white font-semibold">{banner.largeText}</h3>
                    <h3 className="text-4xl md:text-6xl text-white font-semibold">{banner.largeText2}</h3>
                    <p className="text-white mt-2">{banner.saleTime}</p>
                </div>
                <div className="place-self-end md:self-center space-y-1">
                    <p className="text-white">{banner.smallText}</p>
                    <h3 className="text-2xl md:text-4xl text-white font-extrabold ">{banner.minText}</h3>
                    <p className="text-white pr-2 sm:pr-0">{banner.desc}</p>
                    <Link href={`/product/${banner.product}`}>
                        <button type="button" className="bg-white text-rd mt-4 rounded-lg text-sm px-4 py-2">
                            {banner.buttonText}
                        </button> 
                    </Link>
                </div>
                <Image className="absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" width={450} height={380} alt={`${banner.product}`} src={imgUrlFor(banner.image).url()} />
            </div> 
        </div>
    )
}

export default FooterBanner