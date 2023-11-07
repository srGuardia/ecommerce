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
        <div key={product?.id || index} className='w-[170px] max-w-[170px]'>
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </section>
  )
}
