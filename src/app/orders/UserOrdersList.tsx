'use client';

import { OrderWrapper } from "@entities/order/ui/OrderWrapper";
import { IOrder, OrderCard, OrderDetailsModal } from "@entities/order";
import { Button } from "@shared/shadcn/components/button";
import { FaCheckCircle } from "react-icons/fa";
import { EditOrder } from "@features/order/edit/ui/EditOrder";
import { RateOrder } from "@features/order/rate/ui/RateOrder";
import { useEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import Image from "next/image";
import { bgImg, dolphin } from "@shared/assets";

export const UserOrdersList = ({ orders }: { orders: IOrder[] }) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const rowVirtualizer = useVirtualizer({
        count: orders.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => {
            if (containerWidth >= 768) return 145;
            if (containerWidth >= 640) return 260;
            return 250;
        },
    });

    useEffect(() => {
        const updateWidth = () => {
            if (parentRef.current) {
                setContainerWidth(window.innerWidth);
                rowVirtualizer.measure();
            }
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, [rowVirtualizer]);


    return orders.length > 0 ? (
        <div
            className="px-4 max-w-4xl mt-8 h-[calc(100dvh-240px)] sm:h-[calc(100dvh-250px)] w-full overflow-auto"
            ref={parentRef}
        >
            <div
                className="w-full h-full relative"
                style={{height: `${rowVirtualizer.getTotalSize()}px`}} // Устанавливаем общую высоту
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <div
                        key={virtualRow.key}
                        className="absolute top-0 left-0 w-full"
                        style={{
                            transform: `translateY(${virtualRow.start}px)`,
                        }}
                    >
                        <OrderWrapper>
                            <OrderDetailsModal
                                action={<Button className='w-full'>
                                    <FaCheckCircle/>
                                    {orders[virtualRow.index].status}
                                </Button>}
                                order={orders[virtualRow.index]}
                            />
                            <OrderCard order={orders[virtualRow.index]} actions={(
                                <>
                                    <Button className='font-medium'>
                                        <FaCheckCircle/>
                                        {orders[virtualRow.index].status}
                                    </Button>
                                    {(orders[virtualRow.index].status === 'Поиск курьера') &&
                                        <EditOrder as={'user'} order={orders[virtualRow.index]}/>}
                                    {orders[virtualRow.index].status === 'Заказ выполнен' && <RateOrder/>}
                                </>
                            )}/>
                        </OrderWrapper>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className='flex items-center justify-center mt-12 flex-col'>

            <Image loading={'eager'} fetchPriority={'high'} priority className='w-32 mt-8 sm:w-40 md:w-48 lg:w-56'
                   placeholder={'blur'} draggable={false} src={dolphin} alt={'firstChoice'} width={224} height={224}/>
            <Image placeholder="blur" src={bgImg}
                   className='fixed w-[100dvw] h-[100dvh] object-cover top-0 left-0 -z-50' alt='bg'/>

            <div
                className='fixed top-0 left-0 -z-50 w-screen h-screen bg-gradient-to-br from-transparent to-black'/>
            <div
                className='fixed top-0 left-0 -z-50 w-screen h-screen bg-gradient-to-bl from-transparent to-black'/>
            <h1 className='font-semibold text-xl sm:text-3xl mt-4 sm:mt-8'>Тут пока ничего!</h1>
            <h1 className='text-xs sm:text-sm text-zinc-400 mt-2 sm:mt-2'>Попробуйте поискать в <span
                className='text-blue-500'>другом разделе</span></h1>
        </div>
    )
}