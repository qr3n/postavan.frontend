'use client';

import { OrderWrapper } from "@entities/order/ui/OrderWrapper";
import { IOrder, OrderCard, OrderDetailsModal } from "@entities/order";
import { ChangeOrderActive } from "@features/order/change-active/ui/ChangeOrderActive";
import { ChangeOrderStatus } from "@features/order/change-status/ui/ChangeOrderStatus";
import { EditOrder } from "@features/order/edit/ui/EditOrder";
import { useRef, useEffect, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ExportOrder } from "@features/order/export/ui/ExportOrder";

export const AdminOrdersList = ({ orders }: { orders: IOrder[] }) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const rowVirtualizer = useVirtualizer({
        count: orders.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => {
            if (containerWidth >= 768) return 135;
            if (containerWidth >= 640) return 260;
            return 240;
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

    return (
        <div
            className="px-4 max-w-4xl mt-8 h-[calc(100dvh-240px)] sm:h-[calc(100dvh-250px)] w-full overflow-auto"
            ref={parentRef}
        >
            <div
                className="w-full relative"
                style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <div
                        key={virtualRow.key}
                        className="absolute top-0 left-0 w-full"
                        style={{
                            transform: `translateY(${virtualRow.start}px)`,
                            height: `${virtualRow.size}px`,
                        }}
                    >
                        <OrderWrapper>
                            <OrderDetailsModal order={orders[virtualRow.index]} />
                            <OrderCard
                                order={orders[virtualRow.index]}
                                actions={
                                    <>
                                        <div className="gap-3 md:space-y-0 md:gap-3 flex flex-col-reverse items-start justify-start md:items-center md:flex-row w-full md:w-max">
                                            <ChangeOrderActive order={orders[virtualRow.index]} />
                                            <ChangeOrderStatus order={orders[virtualRow.index]} />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <EditOrder order={orders[virtualRow.index]} />
                                            <ExportOrder order={orders[virtualRow.index]} />
                                        </div>
                                    </>
                                }
                            />
                        </OrderWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};
