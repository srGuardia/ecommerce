import Image from 'next/image'
import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import { ProductList } from './components/product-list'
import { SectionTitle } from './components/section-title'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const headphones = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
      category: {
        slug: {
          equals: 'headphones',
        },
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
      category: {
        slug: {
          equals: 'mouses',
        },
      },
    },
  })

  return (
    <main className='p-5'>
      <Image
        src='/images/banner_home_01.png'
        alt='Até 55% de desconto esse mês'
        width={0}
        height={0}
        className='h-auto w-full'
        sizes='100vw'
      />

      <div className='mt-8'>
        <Categories />
      </div>

      <div className='mt-8'>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <Image
        src='/images/banner_home_02.png'
        alt='Até 55% de desconto em mouses!'
        width={0}
        height={0}
        className='mt-8 h-auto w-full'
        sizes='100vw'
      />

      <div className='mt-8'>
        <SectionTitle>Fones</SectionTitle>
        <ProductList products={headphones} />
      </div>

      <Image
        src='/images/banner_home_03.png'
        alt='Até 55% de desconto em mouses!'
        width={0}
        height={0}
        className='mt-8 h-auto w-full'
        sizes='100vw'
      />

      <div className='mt-8'>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </main>
  )
}
