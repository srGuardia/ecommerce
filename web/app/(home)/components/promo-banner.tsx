import Image, { ImageProps } from 'next/image'

interface PromoBannerProps extends ImageProps {}

export const PromoBanner = ({ ...rest }: PromoBannerProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      width={0}
      height={0}
      className='mt-8 h-auto w-full'
      sizes='100vw'
      {...rest}
    />
  )
}
