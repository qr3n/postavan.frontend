'use client'

import { OrderCard, OrderDetailsModal }             from "@entities/order";
import { useVirtualizer }                           from "@tanstack/react-virtual";
import { useRef }                                   from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/shadcn/components/tabs";

export default function ProfilePage() {
    const orders = Array.from({ length: 1000 }); // Ваши данные
    const parentRef = useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtualizer({
        count: orders.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 85,
    });

    return (
        <div className="flex items-center justify-center mt-6 sm:mt-12 flex-col" vaul-drawer-wrapper="">
            <h1 className="font-semibold text-4xl sm:text-5xl">Мои заказы</h1>
            <Tabs defaultValue={'phone'}>
                <TabsList className='mt-5'>
                    <TabsTrigger value={'phone'}>Активные</TabsTrigger>
                    <TabsTrigger value={'email'}>Запланированные</TabsTrigger>
                    <TabsTrigger value={'closed'}>Закрытые</TabsTrigger>
                </TabsList>

                <TabsContent value={'phone'}>

                </TabsContent>

                <TabsContent value={'email'}>

                </TabsContent>

                <TabsContent value={'closed'}>

                </TabsContent>
            </Tabs>
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
