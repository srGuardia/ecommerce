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
  SheetClose,
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
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Link from 'next/link'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

type MenuItemProps = {
  title: string
  icon: JSX.Element
  action?: (
    data?: Session | null,
    routerData?: AppRouterInstance,
  ) => void | Promise<void>
}

const menuItems = (data?: Session | null): MenuItemProps[] => [
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
    action: (_, routerData) => routerData?.push('/'),
  },
  {
    title: 'Ofertas',
    icon: <PercentIcon size={16} />,
  },
  {
    title: 'Catalógo',
    icon: <ListOrderedIcon size={16} />,
    action: (_, routerData) => routerData?.push('/catalog'),
  },
]

export const Header = ({ ...rest }: HeaderProps) => {
  const { data } = useSession()
  const router = useRouter()

  return (
    <Card
      className='sticky top-0 z-10 flex w-full items-center justify-between p-5'
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
              <SheetClose key={index} asChild>
                <Button
                  variant='outline'
                  className='w-full justify-start gap-2'
                  onClick={() => menu?.action && menu?.action(data, router)}
                >
                  {menu?.icon}
                  {menu?.title}
                </Button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Link href='/'>
        <h1 className='text-lg font-semibold'>
          <span className='text-primary'>FSW</span>&nbsp;Store
        </h1>
      </Link>

      <Button size='icon' variant='outline'>
        <ShoppingCartIcon />
      </Button>
    </Card>
  )
}

Header.displayName = 'Header'
