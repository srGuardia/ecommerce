import { CATEGORY_ICON } from '@/app/contants/category-item'
import { Badge, ProductItem } from '@/components/ui'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'

const CategoryProduct = async ({ params }: any) => {
  const categorys = await prismaClient.category.findFirst({
    where: {
      slug: params?.slug,
    },
    include: {
      Product: true,
    },
  })

  return (
    <div className='flex flex-col gap-8 p-5'>
      <Badge
        className='w-fit gap-1 border-2 border-primary px-3 py-2 text-base uppercase'
        variant='outline'
      >
        {CATEGORY_ICON[params?.slug as keyof typeof CATEGORY_ICON]}
        {categorys?.name}
      </Badge>

      <div className='grid grid-cols-2 gap-8'>
        {categorys?.Product?.map((product) => (
          <ProductItem
            key={product?.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryProduct
