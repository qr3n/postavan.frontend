'use client'

import { OrderCard, OrderDetailsModal } from "@entities/order";
import { Button } from "@shared/shadcn/components/button";
import stat from './stat.gif';
import { ImageLoader } from "@shared/ui/image-loader";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef }                       from "react";

export default function ProfilePage() {
    const orders = Array.from({ length: 1000 }); // Ваши данные
    const parentRef = useRef<HTMLDivElement>(null);

    // Настройка виртуализатора
    const rowVirtualizer = useVirtualizer({
        count: orders.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 100,
    });

    return (
        <div className="flex items-center justify-center mt-6 sm:mt-12 flex-col" vaul-drawer-wrapper="">
            <h1 className="font-semibold text-4xl sm:text-5xl">Мои заказы</h1>
            <Button
                variant="outline"
                className="mt-3 sm:mt-4 flex gap-1 dark:text-zinc-100 font-normal"
                size="sm"
            >
                <ImageLoader
                    priority
                    width={18}
                    height={18}
                    src={stat}
                    alt="stat"
                    className="w-[18px] h-[18px]"
                />
                Посмотреть статистику
            </Button>

            <div
                className="px-4 sm:px-[50px] md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[400px] mt-8 h-[calc(100dvh-240px)] sm:h-[calc(100dvh-250px)] w-full overflow-auto"
                ref={parentRef}
            >
                <div
                    className="w-full h-full relative"
                    style={{ height: `${rowVirtualizer.getTotalSize()}px` }} // Устанавливаем общую высоту
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                        <div
                            key={virtualRow.key}
                            className="absolute top-0 left-0 w-full"
                            style={{
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            <div className="relative">
                                <OrderDetailsModal />
                                <OrderCard />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
