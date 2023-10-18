import { Product } from '@prisma/client'

export interface ProductWithTotalPrice extends Product {
  totalPrice: number
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product?.discountPercentage === 0)
    return {
      ...product,
      totalPrice: Number(product?.basePrice),
    }

  const totalDiscount =
    Number(product?.basePrice) * Number(product?.discountPercentage / 100)

  return {
    ...product,
    totalPrice: Number(product?.basePrice) - Number(totalDiscount),
  }
}

export const formatPrice = (price: number) => {
  return Intl?.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })?.format(Number(price))
}
