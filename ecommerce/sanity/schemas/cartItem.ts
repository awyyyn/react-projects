import { defineType, defineField, defineArrayMember } from 'sanity';


export default defineType({
    name: 'cart',
    title: 'Cart', 
    type: 'document',
    fields: [ 
        defineField({
            name: 'userId',
            title: 'User Id',
            type:'string' 
        }), 
        defineField({
            name: 'productName',
            title: 'Product Name',
            type:'string'
        }), 
        defineField({
            name: 'productId',
            title: 'Product ID',
            type:'string'
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'productImage',
            title: 'Product Image', 
            type: 'string',
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        })  
    ]
})