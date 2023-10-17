import { HTMLAttributes } from 'react'
import {
  Card,
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from '@/components/ui'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const menuItems = [
  { title: 'Fazer login', icon: <LogInIcon size={16} /> },
  {
    title: 'Início',
    icon: <HomeIcon size={16} />,
  },
  {
    title: 'Ofertas',
    icon: <PercentIcon size={16} />,
  },
  {
    title: 'Catalógo',
    icon: <ListOrderedIcon size={16} />,
  },
]

export const Header = ({ ...rest }: HeaderProps) => {
  return (
    <Card
      className='sticky top-0 flex w-full items-center justify-between p-5'
      {...rest}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline'>
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side='left'>
          <SheetHeader className='text-left text-lg font-semibold'>
            Menu
          </SheetHeader>

          <div className='mt-2 flex flex-col gap-2'>
            {menuItems?.map((menu, index) => (
              <Button
                key={index}
                variant='outline'
                className='w-full justify-start gap-2'
              >
                {menu?.icon}
                {menu?.title}
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <h1 className='text-lg font-semibold'>
        <span className='text-primary'>FSW</span>&nbsp;Store
      </h1>

      <Button size='icon' variant='outline'>
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}

Header.displayName = 'Header'
