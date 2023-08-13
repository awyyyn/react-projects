 

interface document {
    _createdAt: string
    _id:string
    _type: string  
}

export interface cartItem {
    quantity: number  
    price: number 
    productName: string  
    productImage: string 
    _id: string 
}

export interface image { 
    _type: string
    _key: string
    asset: {
        _ref: string
        _type: string
    }
}



export interface product extends document { 
    price: number 
    name: string 
    slug: {
        _type: string
        current: string
    }
    image: image[]
    details: string
}

export interface banner extends document { 
    image: image
    minText: string
    desc: string
    buttonText: string
    discount: string
    largeText: string
    largeText2: string
    product: string
    smallText: string
    saleTime: string 
}
 


export interface user {
    _id: string
    id: string 
    imageUrl: string
    firstName: string | null
    lastName: string | null
    username: string | null
    emailAddress: string
    _type: string
}