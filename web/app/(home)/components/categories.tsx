import { prismaClient } from '@/lib/prisma'
import { CategorieItem } from './categorie-item'

export const Categories = async () => {
  const categories = await prismaClient.category.findMany()

  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
      {categories?.map((categorie, index) => (
        <CategorieItem key={categorie?.id || index} category={categorie} />
      ))}
    </div>
  )
}
