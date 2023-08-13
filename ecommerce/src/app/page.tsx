import { Cart, Footer, FooterBanner, HeroBanner, Navbar, Product } from '@/components'
import Image from 'next/image'
import { apiVersion } from '../../sanity/env';
import client from '@/lib/sanityClient';
import { banner, product, user } from '@/lib/types';
import { SignedIn, currentUser } from '@clerk/nextjs';   



async function getData() {
  const user = await currentUser().catch(err => console.log(err));

  if(user?.id){
    const userDoc: user = {
      _id: user.id,
      emailAddress: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
      imageUrl: user.imageUrl,  
      username: user.username,
      _type: 'user'
    }
    await client.createIfNotExists(userDoc);
  }

  const productQuery = "*[_type == \"product\"]";
  const products = await client.fetch<product[]>(productQuery);

  const bannerQuery = "*[_type == \"banner\"]"
  const banner = await client.fetch<banner[]>(bannerQuery) 

  return {products, banner }
}

export default async function Home() {
 
  const { banner, products } = await getData(); 
  
  return (
    <>
      <div className='overflow-x-hidden min-h-[600px] h-screen overflow-y-scroll   relative'>
        <Cart />
        <SignedIn> 
            <Navbar />
        </SignedIn>
        <main className='pt-4'>
          <HeroBanner  banner={banner[0]} />
          <div className='text-center md:space-y-3 mt-5'>
            <h2 className='text-primary text-3xl md:text-5xl'>Best selling products</h2>
            <p className='text-gray'>Speakers of many variations</p>
          </div>

          <div className='px-5 sm:px-16 md:px-28 mt-5 pb-10 flex flex-wrap gap-16 justify-center  w-full'>
            {products?.map((product) => ( 
                <Product product={product} key={product._id} /> 
            ))}
          </div>

          <FooterBanner banner={banner[0]} />  
        </main>
        <SignedIn> 
            <Footer /> 
        </SignedIn>
      </div> 
    </>
  )
}
