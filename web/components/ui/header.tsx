'use client'

import { HTMLAttributes } from 'react'
import {
  Card,
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Separator,
} from '@/components/ui'
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Session } from 'next-auth'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const menuItems = (data?: Session | null) => [
  {
    title: !data ? 'Fazer login' : 'Fazer logout',
    icon: !data ? <LogInIcon size={16} /> : <LogOutIcon size={16} />,
    action: async (data?: Session | null) => {
      if (!data) await signIn()

      await signOut()
    },
  },
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
  const { data } = useSession()
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

          {data && (
            <div className='flex flex-col'>
              <div className='flex items-center gap-2 py-4'>
                <Avatar>
                  {data?.user?.image && <AvatarImage src={data?.user?.image} />}
                  <AvatarFallback>
                    {data?.user?.name?.[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className='flex flex-col gap-1'>
                  <p className='font-medium'>{data?.user?.name}</p>
                  <p className='text-xs opacity-75'>Boas compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className='mt-2 flex flex-col gap-2'>
            {menuItems(data)?.map((menu, index) => (
              <Button
                key={index}
                variant='outline'
                className='w-full justify-start gap-2'
                onClick={() => menu?.action && menu?.action(data)}
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
