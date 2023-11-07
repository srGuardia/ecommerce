import { ComponentProps } from 'react'

export const SectionTitle = ({ children, ...rest }: ComponentProps<'p'>) => {
  return (
    <p className='mb-3 pl-5 font-bold uppercase' {...rest}>
      {children}
    </p>
  )
}
