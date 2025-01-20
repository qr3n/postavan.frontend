'use client';

import { useAdminAllOrders } from "@entities/order/model/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/shadcn/components/tabs";
import { AdminOrdersList } from "@app/admin/orders/AdminOrdersList";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminPage() {
    const { orders, isLoading } = useAdminAllOrders()

    const closedOrders = orders?.filter(order => order.active === false)
    const allActiveOrders = orders?.filter(order => order.active === true)

    return (
        <div className="flex items-center justify-center mt-6 sm:mt-12 flex-col" vaul-drawer-wrapper="">
            <h1 className="font-semibold text-4xl sm:text-5xl">Все заказы</h1>
            <Tabs defaultValue={'today'} className='w-full h-full flex items-center flex-col'>
                <TabsList className='mt-5'>
                    <TabsTrigger value={'today'}>Активные</TabsTrigger>
                    <TabsTrigger value={'planned'}>Запланированные</TabsTrigger>
                    <TabsTrigger value={'closed'}>Закрытые</TabsTrigger>
                </TabsList>

                <AnimatePresence mode={'wait'}>
                    {isLoading && (
                        <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            key='template'
                            className='w-full mt-8 max-w-4xl h-full space-y-6 overflow-hidden px-4'
                        >
                            {Array.from(Array(20).keys()).map(item => <div
                                className='h-[80px] animate-pulse rounded-2xl bg-zinc-800 w-full' key={item}/>)}
                            <div
                                className='absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent'/>
                        </motion.div>
                    )}

                    {!isLoading && (
                        <motion.div key={'orders'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full h-full'>
                            <TabsContent className='w-full h-full justify-center mt-0 flex' value={'today'}>
                                <AdminOrdersList orders={allActiveOrders}/>
                            </TabsContent>

                            <TabsContent className='w-full h-full justify-center mt-0 flex' value={'planned'}>
                                <AdminOrdersList orders={allActiveOrders}/>
                            </TabsContent>

                            <TabsContent className='w-full h-full justify-center mt-0 flex' value={'closed'}>
                                <AdminOrdersList orders={closedOrders}/>
                            </TabsContent>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Tabs>
        </div>
    )
}