import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import type { cartItem } from '@/lib/types' 

const stripe = new Stripe("sk_test_51NdqiYBqUzhy869Dr6fiHI2ry88taDGJm3lpsGWoK1FL5DEsrz4CfcXCyTw62JWoSztftzJ7eJMNsolg6Vd4SOLh00teoNf6Ss", {
    apiVersion: "2022-11-15",
});


export async function POST(req: NextRequest) {
    try {
        
        const { cartItems }: {cartItems: cartItem[]} = await req.json(); 
 

        const session = await stripe.checkout.sessions.create({ 
            submit_type: 'pay', 
            mode: "payment",
            payment_method_types: ['card'],
            billing_address_collection: "auto",
            shipping_options: [
                {shipping_rate: "shr_1Ndvh3BqUzhy869DoY8A0xYm"},
                // {shipping_rate: "shr_1NdviIBqUzhy869DzzS99KKu"},
                // {shipping_rate: "shr_1Ndvj9BqUzhy869DkH2AjLEw"},
            ],
            line_items: cartItems.map((item) => {

                // const img = item.image[0].asset._ref;
                // const newImage = img.replace('image-', 'https://cdn.sanity.io/images/siopl9y6/production/').replace('-webp', '.webp');
                
                return {
                    price_data: {
                        currency: 'USD',
                        product_data: {
                            name: item.productName,
                            images: [item.productImage],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                }
            }), 
            success_url: `${req.headers.get('origin')}/payment?success=true`,
            cancel_url: `${req.headers.get('origin')}/?cancel=true`
        })
 
        console.log(session)
        
        return NextResponse.json(session)
        
    } catch (error) {
        return NextResponse.json(error)
        // res.status(500).json({statusCode: 500, message: error.message}) 
    }
}