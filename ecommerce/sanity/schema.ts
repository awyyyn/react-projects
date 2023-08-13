import { type SchemaTypeDefinition } from 'sanity'
import banner from './schemas/banner'
import product from './schemas/product'
import user from './schemas/user'
import cartItem from './schemas/cartItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    banner,
    product,
    user,
    cartItem
  ],
}
