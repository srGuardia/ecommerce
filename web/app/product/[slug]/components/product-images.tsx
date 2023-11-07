'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductImagesProps {
  imageUrls: string[]
  name: string
}

export const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(imageUrls?.[0])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex h-[380px] w-full items-center justify-center bg-accent'>
        <Image
          src={selectedImage}
          alt={name}
          width={0}
          height={0}
          style={{ objectFit: 'contain' }}
          sizes='100vw'
          className='h-auto max-h-[70%] w-auto max-w-[80%]'
        />
      </div>

      <div className='grid grid-cols-4 gap-4 px-5'>
        {imageUrls?.map((imageUrl, index) => (
          <button
            key={imageUrl ?? index}
            className={`flex h-[80px] max-h-[80px] w-auto max-w-[130px] items-center justify-center rounded-md bg-muted transition-all hover:scale-110 ${
              imageUrl === selectedImage && 'border border-primary'
            }`}
            onClick={() => setSelectedImage(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              style={{ objectFit: 'contain' }}
              sizes='100vw'
              className='h-auto max-h-[70%] w-auto max-w-[80%]'
            />
          </button>
        ))}
      </div>
    </div>
  )
}
