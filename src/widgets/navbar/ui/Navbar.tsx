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

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='w-full pt-3 sm:pt-5 pr-3 sm:pr-5 gap-2 sticky top-0 flex justify-end items-center flex-row'>
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
                    <div className='hover:scale-110 transition-all cursor-pointer'>
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
                        <p className='text-xs sm:text-sm text-zinc-500'>qren.freelance@gmail.co</p>
                        <div
                            className={`w-max bg-green-500/30 flex gap-1 items-center py-1.5 mt-3 px-3 rounded-full`}
                        >
                            <RiShoppingBag4Fill className='text-green-500'/>
                            <p className='text-[12px]'>10 заказов</p>
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
        </div>
    );
};
