import { defineType, defineField, defineArrayMember } from 'sanity';


export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'id', 
            type: 'string',
            title: 'ID',
        }),
        defineField({
            name: 'imageUrl', 
            title: 'Image Url',
            type: 'string'
        }),
        defineField({
            name: 'firstName', 
            type: 'string',
            title: 'First Name'
        }),
        defineField({
            name: 'lastName', 
            type: 'string',
            title: 'Last Name'
        }),
        defineField({
            name: 'username', 
            type: 'string',
            title: 'Username'
        }),
        defineField({
            name: 'emailAddress',
            type: 'string',
            title: 'Email Address',
        }),
        // defineField({
        //     name: 'cartItems',
        //     title: 'Cart Items',
        //     type: 'array',
        //     of: [ 
        //         defineArrayMember({
        //             name: 'cartItem',
        //             title: 'Cart Item',
        //             type: 'document',
        //             fields: [
        //                 defineField({
        //                     name: 'productName',
        //                     title: 'Product Name',
        //                     type:'string'
        //                 }),
        //                 defineField({
        //                     name: 'price',
        //                     title: 'Price',
        //                     type: 'number',
        //                 }),
        //                 defineField({
        //                     type: 'url',
        //                     name: 'productImg',
        //                     title: 'Product Image',
        //                 }),
        //                 defineField({
        //                     name: 'quantity',
        //                     title: 'Quantity',
        //                     type: 'number',
        //                 })
        //             ]
        //         })
        //     ]
        // })
    ]
})