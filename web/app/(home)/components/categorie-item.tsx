import { Badge } from '@/components/ui'
import { Category } from '@prisma/client'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'

interface CategorieItemProps {
  category: Category
}

const categoryIcon = {
  keyboards: <KeyboardIcon size={16} />,
  monitors: <MonitorIcon size={16} />,
  headphones: <HeadphonesIcon size={16} />,
  mousepads: <SquareIcon size={16} />,
  speakers: <SpeakerIcon size={16} />,
  mouses: <MouseIcon size={16} />,
}

export const CategorieItem = ({ category }: CategorieItemProps) => {
  return (
    <Badge
      variant='outline'
      className=' max-w-xs justify-center gap-2 rounded-lg py-3'
    >
      {categoryIcon[category?.slug as keyof typeof categoryIcon]}

      <span className='text-xs font-bold'>{category?.name}</span>
    </Badge>
  )
}
