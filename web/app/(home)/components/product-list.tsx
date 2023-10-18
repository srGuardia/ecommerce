import { ProductItem } from '@/components/ui'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

interface ProductListProps {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className='flex w-full gap-12 overflow-x-auto px-5 md:gap-4 [&::-webkit-scrollbar]:hidden'>
      {products?.map((product, index) => (
        <ProductItem
          key={product?.id || index}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </section>
  )
}
