'use client';

import { AnimatePresence, motion } from "framer-motion";
import { OrderWrapper } from "@entities/order/ui/OrderWrapper";
import { IOrder, OrderCard, OrderDetailsModal } from "@entities/order";
import { Button } from "@shared/shadcn/components/button";
import { FaCheckCircle } from "react-icons/fa";
import { EditOrder } from "@features/order/edit/ui/EditOrder";
import { RateOrder } from "@features/order/rate/ui/RateOrder";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export const UserOrdersList = ({ orders }: { orders: IOrder[] }) => {
    const parentRef = useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtualizer({
        count: orders?.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 85,
    });

    return (
        <AnimatePresence mode={'wait'}>
            <div
                className="px-4 max-w-4xl mt-8 h-[calc(100dvh-240px)] sm:h-[calc(100dvh-250px)] w-full overflow-auto"
                ref={parentRef}
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
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
                                <OrderDetailsModal order={orders[virtualRow.index]}/>
                                <OrderCard order={orders[virtualRow.index]} actions={(
                                    <>
                                        <Button className='font-medium'>
                                            <FaCheckCircle/>
                                            {orders[virtualRow.index].status}
                                        </Button>
                                        <EditOrder order={orders[virtualRow.index]}/>
                                        <RateOrder/>
                                    </>
                                )}/>
                            </OrderWrapper>
                        </div>
                    ))}
                </motion.div>
            </div>
        </AnimatePresence>
    )
}