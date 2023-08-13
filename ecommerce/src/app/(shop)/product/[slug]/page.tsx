'use client'
import client, { imgUrlFor } from "@/lib/sanityClient";
import { image, product } from "@/lib/types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react"; 
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineMinus } from 'react-icons/ai'
import { Product, Toast } from "@/components";
import Loading from "./loading";
import { ShoppingContext } from '../../../context/StoreContext';
import { useAuth } from '@clerk/nextjs'; 
import getStripe from "@/lib/stripe";


const ProductPage = ({params}: {params: {slug: string}}) => { 

    const { userId } = useAuth();

    interface img {
        url: string
        key: string
    }
    
    const { setShopContext, shopContext } = useContext(ShoppingContext)
    const { slug } = params;
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [product, setProduct] = useState<product>();
    const [otherProducts, setOtherProducts] = useState<product[]>()
    const [loading, setLoading] = useState(true);  
    const [img, setImg] = useState<img>(); 
    const [quantity, setQuantity] = useState(1)
    const placeholderImg = "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

    useEffect(() => {
        async function getProductData (slug: string) {
            const queryProduct = `*[_type == "product" && slug.current == "${slug}"][0]`;
            const otherProductQuery = `*[_type == "product" && slug.current != "${slug}"]`; 
            const response = await client.fetch<product>(queryProduct); 
            const otherResponse = await client.fetch<product[]>(otherProductQuery); 


            setOtherProducts(otherResponse)
            setProduct(response); 
            if(response){
                setImg({
                    key: response.image[0]._key,
                    url: imgUrlFor(response.image[0]).url()
                })
            }
            setLoading(false)
        }; 
        getProductData(slug);  

    }, [slug]);

    const handleClick = (image: image) => setImg({
        key: image._key,
        url: imgUrlFor(image).url()
    });
 

    const handleAddToCart = async(product: product, quantity: number) => {
        setLoadingBtn(true)
        // const isAddedQuery = `*[_type == "cart" && _id == "${product._id}${userId}"][0]`
        // const isAddedResponse = await client.fetch(isAddedQuery)  
        const img = imgUrlFor(product.image[0]).url();  
   
        client.getDocument(`${product._id}${userId}`).then(async(data) => {
            
            if(data){
                const doc = {...data, quantity: data?.quantity + quantity, productImage:  String(img)}
                client.createOrReplace(doc)
                    .then((res) => {  
                        const updateQuantity = shopContext.cartItems.map(item => {
                            if(item._id == `${product._id}${userId}`){
                                return {...item, quantity: data.quantity + quantity}
                            }else{
                                return item
                            }
                        }); 
        
                        setShopContext(prev => ({
                            ...prev,  
                            showToast: true, 
                            cartItems: updateQuantity,
                            toast: `${quantity} ${product.name} added to cart.`,
                            totalPrice: prev.totalPrice + (quantity * product.price)
                        }))
                    }).catch(err => console.log(err))
                
            }else{
                const doc = { 
                    userId: userId,
                    productId: product._id,
                    _id: `${product._id}${userId}`,
                    quantity: quantity, 
                    price: product.price,
                    productName: product.name,
                    productImage:  String(img)
                }
                await client.create({
                    _type: "cart",
                    ...doc
                }).catch(err => console.log(err)) 
                setShopContext((prev) => ({
                    ...shopContext, 
                    showToast: true,
                    cartItems: [...prev.cartItems, doc],
                    toast: `${quantity} ${product.name} added to cart.`,
                    totalQuantities: prev.totalQuantities + 1,
                    totalPrice: prev.totalPrice + (quantity * product.price)
                }))
            } 
            setLoadingBtn(false);
            setTimeout(() => {
                setShopContext(prev => ({...prev, showToast: false}));
            }, 5000)
            setQuantity(1);
        }).catch(err => console.log(err)); 
    }
   

    if(loading) return <Loading />
        
    if(!product) throw new Error('Product doesn\'t exist.');
         

    return (
        <>
            <Toast /> 
            <div className="flex flex-col px-5 sm:px-16 md:px-28 md:justify-evenly  md:flex-row items-center md:items-start gap-y-3 w-[98%] mx-auto">
                <div className="py-5  space-y-5">
                    <div className="relative h-[300px] md:h-[500px] md:w-[500px] w-[300px] mx-auto bg-slate-100 rounded-lg shadow-2xl ">
                        <Image src={img?.url ? img.url : placeholderImg} fill className="h-full w-full object-contain absolute" alt={`${product.slug.current}`} />
                    </div>
                    <div className="flex gap-x-3 flex-wrap justify-center">
                        {product.image.filter((image) => image._key !== img?.key).map((img: image ) =>  (
                            <div onClick={() => handleClick(img)} className="relative w-[60px] h-[60px] bg-slate-100 shadow-lg hover:bg-slate-200 cursor-pointer  rounded-lg overflow-hidden p-3 " key={img._key}>
                                <Image src={imgUrlFor(img).url()} fill className="absolute h-full w-full object-cover" alt="sub-images"  />
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" h-auto md:px-10 md:w-auto md:py-16 w-full ">
                    <h1 className="text-4xl font-bold text-primary">{product.name}</h1>
                    <div>
                        <p></p>
                    </div>
                    <h3 className="text-lg font-semibold mt-3">Details: </h3>
                    <p className="text-gray text-base ">{product.details}</p>
                    <p className="text-lg font-semibold">${product.price}</p>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <p className="font-bold mt-3">Quantity:</p>
                        <div className="flex bg-slate-100 mt-2 max-w-min border border-gray" >
                            <button disabled={quantity == 1} className=" p-1 border-r border-gray group " onClick={() => {
                                if(quantity <= 1) return setQuantity(1)
                                setQuantity(prev => prev - 1)
                            }}>
                                <p className="group-active:scale-75 group-disabled:text-gray group-disabled:scale-100 text-2xl transition-all "> 
                                    <AiOutlineMinus />
                                </p>
                            </button>
                            <p className="max-w-[80px] w-[30px] text-xl text-center ">
                                {quantity}
                            </p> 
                            <button className="p-1 border-l border-gray group" onClick={() => setQuantity(prev => prev + 1)}>        
                                <p className="group-active:scale-75 text-2xl transition-all ">
                                    <IoIosAdd />
                                </p>
                            </button>
                        </div>
                    </div>
                    <button className={`px-6 py-2 mt-4 text-red block sm:inline font-semibold sm:mr-5 text-center  w-full sm:w-[150px] border border-red`} onClick={() => handleAddToCart(product, quantity)}>
                        {!loadingBtn ? 'Add to Cart' : 'Loading...'} 
                    </button>

                    <button className="px-6 py-2 mt-3 text-white block sm:inline w-full sm:w-[150px] bg-red" onClick={async () => {
                        const stripe = await getStripe();
                        const response = await fetch('/api/stripe', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                            body: JSON.stringify({cartItems:
                                [
                                    {
                                        userId: userId,
                                        _id: `${product._id}${userId}`,
                                        productId: product._id,
                                        quantity: quantity,
                                        price: product.price,
                                        productName: product.name,
                                        productImage:  imgUrlFor(product.image[0]).url()
                                    }
                                ] 
                            }) 
                            
                        })
                        
                        if(response.status == 500 ) return
                        const data = await response.json(); 
 
                         
                        stripe?.redirectToCheckout({sessionId: data.id})
                    }}>
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="px-5 sm:px-10 md:px-28  pb-5 overflow-hidden"> 
                <div className="flex gap-x-8  py-10 overflow-x-scroll px-16">
                    {otherProducts?.map((product) => (
                        <Product product={product} key={product._id}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductPage
