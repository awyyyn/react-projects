 
import { redirect } from 'next/navigation';
import Link from 'next/link';  
import { BsFillBagCheckFill } from 'react-icons/bs'


type params = "success" | "error"

interface pageProps {
    searchParams: {
        [key in params]: boolean | undefined
    }
}


const page = ({searchParams}: pageProps) => {

    const params = searchParams;
     

    if(Object.keys(params).length === 0 && params.success !== true) return  redirect('/')



    return (
        <section className='flex justify-center items-center relative min-h-[600px] h-screen w-full md:h-[600px]'>
            <div className='bg-slate-100 text-primary w-[90%] sm:w-[80%] md:w-[500px] h-[350px] gap-y-3 flex flex-col items-center shadow-2xl justify-center text-center rounded-lg'>
                <div className='text-4xl text-green-600'>
                    <BsFillBagCheckFill />
                </div>
                <h1 className='text-3xl font-extrabold '>
                    Thank you for your order.
                </h1>   
                <p className='text-primary'>Check your email inbox for the receipt.</p>
                <p className='text-primary'>If you have questions, please email <span className='text-red'>newbee3e@gmail.com</span></p>
                <Link href={'/'}>
                    <button className='bg-red hover:scale-105 hover:shadow-lg transition-all rounded-lg px-6 py-2 uppercase text-white'>
                        Continue shopping
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default page
