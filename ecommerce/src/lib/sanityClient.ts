import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'; 
import { image } from './types';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-08-09', 
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

export const builder = createImageUrlBuilder(client);

export const imgUrlFor = (source: image) => builder.image(source)
 
export default client;