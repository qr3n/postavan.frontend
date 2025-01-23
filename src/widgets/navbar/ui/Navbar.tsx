'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@shared/shadcn/components/dropdown-menu";
import { Avatar } from "@shared/ui/avatar/ui/Avatar";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import * as Portal from "@radix-ui/react-portal";
import { adminAccessTokenAtom, sessionAtom } from "@entities/session/model/atoms";
import { useAtomValue } from "jotai";
import { AuthModal } from "@features/session";
import { Button } from "@shared/shadcn/components/button";
import { useUserOrders } from "@entities/order/model/hooks";
import { TiThMenu } from "react-icons/ti";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@shared/shadcn/components/sheet"

export const Navbar = () => {
    const { orders } = useUserOrders()
    const [menuOpen, setMenuOpen] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const session = useAtomValue(sessionAtom)
    const adminAccessToken = useAtomValue(adminAccessTokenAtom)

    return (
        <div className='w-full pt-4 sm:pt-5 px-3 sm:px-5 h-[52px] sm:h-[56px] gap-2 sticky top-0 flex justify-between items-center flex-row'>
            <div>
                {adminAccessToken &&
                    <>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className='rounded-xl p-1 bg-zinc-700/80 hover:bg-zinc-700 sm:w-10 flex items-center justify-center w-9 h-9 sm:h-10'>
                                    <TiThMenu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Панель администратора</SheetTitle>
                                    <SheetDescription>
                                    </SheetDescription>
                                </SheetHeader>
                                <div className='flex gap-4 flex-col'>
                                    <Link href={'/admin/orders'} className='bg-zinc-800 px-4 mt-4 py-2 rounded-xl'>
                                        Все заказы
                                    </Link>
                                    <Link href={'/admin/tariffs'} className='bg-zinc-800  px-4 py-2 rounded-xl'>
                                        Тарифы
                                    </Link>
                                    <Link href={'/admin/users'} className='bg-zinc-800 px-4 py-2 rounded-xl'>
                                        Пользователи
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </>

 }
            </div>
            { session ? (
                <>
                    <Portal.Root>
                        <AnimatePresence mode={'wait'}>
                            {menuOpen && <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className='w-screen h-screen absolute z-50 top-0 left-0 bg-black/10 backdrop-blur-2xl'
                            />}
                        </AnimatePresence>
                    </Portal.Root>
                    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                        <DropdownMenuTrigger className='z-[400]' asChild>
                            <div className='hover:scale-110 transition-all cursor-pointer p-1 bg-black rounded-full'>
                                <div className='hidden sm:block'>
                                    <Avatar size={40}/>
                                </div>

                                <div className='block sm:hidden'>
                                    <Avatar size={32}/>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mr-4 pb-2 mt-2 pt-4'>
                            <div className='px-8 flex justify-center items-center flex-col'>
                                <div className='p-2 bg-blue-400/30 rounded-full'>
                                    <Avatar size={56}/>
                                </div>
                                <h1 className='font-semibold text-2xl sm:text-3xl mt-2'>Пользователь</h1>
                                <p className='text-xs sm:text-sm text-zinc-500'>{session.phone || session.email}</p>
                                <div
                                    className={`w-max bg-green-500/30 flex gap-1 items-center py-1.5 mt-3 px-3 rounded-full`}
                                >
                                    <RiShoppingBag4Fill className='text-green-500'/>
                                    {orders ? <p className='text-[12px]'>{orders.length} заказ(-ов)</p> : <div className='w-6 rounded-full h-3 bg-zinc-800 animate-pulse'/> }
                                </div>
                            </div>

                            <DropdownMenuSeparator className='mt-4'/>
                            <Link href='/order/create'>
                                <DropdownMenuItem className='mt-2'>
                        <span className="p-0.5 rounded-full bg-blue-500">
                            <PlusIcon className='w-4 h-4'/>
                        </span> Создать заказ
                                </DropdownMenuItem>
                            </Link>
                            <Link href={'/orders'}>
                                <DropdownMenuItem>Мои заказы</DropdownMenuItem>
                            </Link>
                            <Link href={'/profile'}>
                                <DropdownMenuItem>Профиль</DropdownMenuItem>
                            </Link>
                            <Link href={'/settings'}>
                                <DropdownMenuItem>Настройки</DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem>Выйти</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <>
                    <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen}/>
                    <Button onClick={() => setAuthModalOpen(true)} size='sm'>Авторизация</Button>
                </>
            )}
        </div>
    );
};
