import { CATEGORY_ICON } from '@/app/contants/category-item'
import { Badge } from '@/components/ui'
import { Category } from '@prisma/client'
import Link from 'next/link'

interface CategorieItemProps {
  category: Category
}

export const CategorieItem = ({ category }: CategorieItemProps) => {
  return (
    <Link
      href={`/category/${category?.slug}`}
      className='w-full md:max-w-xs md:text-center'
    >
      <Badge
        variant='outline'
        className='w-full max-w-xs justify-center gap-2 rounded-lg py-3'
      >
        {CATEGORY_ICON[category?.slug as keyof typeof CATEGORY_ICON]}

        <span className='text-xs font-bold'>{category?.name}</span>
      </Badge>
    </Link>
  )
}
