import { Badge } from '@/components/ui'
import { ProductWithTotalPrice, formatPrice } from '@/helpers/product'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className='flex max-w-[170px] flex-col gap-4'>
      <div className='relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent'>
        <Image
          src={product?.imageUrls?.[0]}
          alt={product?.name}
          height={0}
          width={0}
          sizes='100vw'
          className='h-auto max-h-[70%] w-auto max-w-[80%]'
          style={{ objectFit: 'contain' }}
        />

        {product?.discountPercentage > 0 && (
          <Badge className='absolute left-2 top-1 px-2 py-1'>
            <ArrowDown size={12} />
            {`${product?.discountPercentage}%`}
          </Badge>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm'>
          {product?.name}
        </p>

        <div className='flex flex-nowrap items-center gap-2'>
          {product?.discountPercentage > 0 && (
            <>
              <p className='font-semibold'>
                {formatPrice(product?.totalPrice)}
              </p>

              <p className='text-xs line-through opacity-75'>
                {formatPrice(Number(product?.basePrice))}
              </p>
            </>
          )}

          {(!product?.discountPercentage ||
            product?.discountPercentage === 0) && (
            <p className='text-sm font-semibold'>
              {formatPrice(Number(product?.basePrice))}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
